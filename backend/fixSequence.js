const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
});

async function fix() {
  try {
    await pool.query(`SELECT setval('users_id_seq', COALESCE((SELECT MAX(id)+1 FROM users), 1), false);`);
    console.log("Sequence fixed.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
fix();
