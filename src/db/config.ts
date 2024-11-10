import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Apply the schema type to the drizzle function
const db = drizzle({ client: pool });

export default db;
