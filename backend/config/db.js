const { Pool } = require('pg');

if (!process.env.DB_URL) {
  console.error("❌ ERROR: DB_URL environment variable is missing! Check Railway Settings.");
}

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
