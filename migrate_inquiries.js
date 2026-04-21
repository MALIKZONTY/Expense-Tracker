const { Pool } = require('pg');
require('dotenv').config();

const poolConfig = {
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
};

async function migrate() {
  let pool;
  try {
    console.log('Starting migration for inquiries table...');
    pool = new Pool(poolConfig);
    
    // Add columns if they don't exist
    await pool.query(`
      ALTER TABLE inquiries 
      ADD COLUMN IF NOT EXISTS guest_name TEXT,
      ADD COLUMN IF NOT EXISTS guest_email TEXT;
    `);

    // Make user_id nullable
    await pool.query(`
      ALTER TABLE inquiries 
      ALTER COLUMN user_id DROP NOT NULL;
    `);

    console.log('Migration completed successfully.');
    process.exit(0);
  } catch (err) {
    if (err.message.includes('SSL') && poolConfig.ssl) {
      console.log('SSL failed, retrying without SSL...');
      delete poolConfig.ssl;
      return migrate();
    }
    console.error('Migration failed:', err);
    process.exit(1);
  } finally {
    if (pool) await pool.end();
  }
}

migrate();
