import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

let pool;

export const connectDB = async () => {
  if (!process.env.DATABASE_URL) {
    console.log("No DATABASE_URL found. Postgres will not connect.");
    return;
  }

  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await pool.connect();
    console.log('PostgreSQL Connected successfully!');

    // Initialize tables if they don't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        "bookId" VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL,
        "reviewText" TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'approved',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        reason VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Postgres Tables Initialized');
  } catch (error) {
    console.error(`Postgres Connection Error: ${error.message}`);
  }
};

export const getPool = () => pool;
