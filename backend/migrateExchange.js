const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
});

async function migrate() {
  try {
    console.log("Starting migration: adding to_payment_method to transactions...");
    await pool.query(`ALTER TABLE transactions ADD COLUMN IF NOT EXISTS to_payment_method VARCHAR(50);`);
    console.log("Migration complete: added to_payment_method to transactions.");
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

migrate();
