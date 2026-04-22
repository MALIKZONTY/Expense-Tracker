const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
});

async function sync() {
  console.log("🚀 Starting database synchronization...");
  try {
    // 1. Update Users table
    console.log("Checking 'users' table...");
    await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'user';`);

    // 2. Update Transactions table
    console.log("Checking 'transactions' table...");
    await pool.query(`ALTER TABLE transactions ADD COLUMN IF NOT EXISTS payment_method VARCHAR(50) DEFAULT 'Cash';`);
    await pool.query(`ALTER TABLE transactions ADD COLUMN IF NOT EXISTS to_payment_method VARCHAR(50);`);
    await pool.query(`ALTER TABLE transactions ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN DEFAULT false;`);

    // 3. Create Inquiries table if missing
    console.log("Checking 'inquiries' table...");
    await pool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        guest_name VARCHAR(255),
        guest_email VARCHAR(255),
        message TEXT NOT NULL,
        reply TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Database synchronization complete! Your existing data is safe.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Synchronization failed:", err);
    process.exit(1);
  }
}

sync();
