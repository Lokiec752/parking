import { Pool } from "pg";
import fs from "fs";
import path from "path";
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "@/src/db/schema"; // Import the schema type

console.log("this is working nopw");

const pool = new Pool({
  // postgres://postgres:parking@localhost:5432/parking
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`,
  ssl: false,
});

// Apply the schema type to the drizzle function
const db = drizzle({ client: pool });

export default db;
