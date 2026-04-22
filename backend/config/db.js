const { Pool, types } = require('pg');

// Force DATE (OID 1082) to be returned as a raw string to avoid timezone shifting
types.setTypeParser(1082, (val) => val);

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
