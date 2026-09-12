const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
});

async function migrate() {
  try {
    console.log("Starting migration: switching auth from email to username...");

    await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS username VARCHAR(255);`);

    // Backfill existing accounts with a username derived from their email,
    // resolving collisions by appending a numeric suffix.
    const { rows } = await pool.query(`SELECT id, email FROM users WHERE username IS NULL`);
    for (const user of rows) {
      let base = (user.email || `user${user.id}`).split('@')[0].toLowerCase().replace(/[^a-z0-9_]/g, '');
      if (!base) base = `user${user.id}`;
      let candidate = base;
      let suffix = 1;
      // eslint-disable-next-line no-await-in-loop
      while (true) {
        const { rows: existing } = await pool.query(
          'SELECT id FROM users WHERE username = $1 AND id != $2',
          [candidate, user.id]
        );
        if (existing.length === 0) break;
        candidate = `${base}${suffix}`;
        suffix++;
      }
      // eslint-disable-next-line no-await-in-loop
      await pool.query('UPDATE users SET username = $1 WHERE id = $2', [candidate, user.id]);
      console.log(`  - user ${user.id}: username set to "${candidate}"`);
    }

    await pool.query(`ALTER TABLE users ALTER COLUMN username SET NOT NULL;`);
    await pool.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = 'users_username_key'
        ) THEN
          ALTER TABLE users ADD CONSTRAINT users_username_key UNIQUE (username);
        END IF;
      END $$;
    `);

    // Email is no longer required for auth going forward; keep the column
    // (and existing data) around but stop enforcing NOT NULL.
    await pool.query(`ALTER TABLE users ALTER COLUMN email DROP NOT NULL;`);

    console.log("Migration complete: users now have a unique username; email is optional.");
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

migrate();
