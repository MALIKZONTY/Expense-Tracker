const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
});

const setupDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        amount NUMERIC NOT NULL,
        type VARCHAR(50) NOT NULL,
        category VARCHAR(100) NOT NULL,
        note TEXT,
        date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert dummy user if doesn't exist
    const { rows } = await pool.query('SELECT * FROM users WHERE id = 1');
    if (rows.length === 0) {
      await pool.query(`INSERT INTO users (id, email, password) VALUES (1, 'demo@smarttracker.com', 'password')`);
    }

    console.log('Database setup complete.');
    process.exit(0);
  } catch (err) {
    console.error('Error setting up DB:', err);
    process.exit(1);
  }
};

setupDB();
