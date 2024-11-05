import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';
import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from '@/src/db/schema'; // Import the schema type

// Load the CA certificate
const caCert = fs.readFileSync(
  path.resolve(__dirname, '../../certs/ca-certificate.crt')
).toString();

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    // ca: caCert, // Use the CA certificate
    rejectUnauthorized: true, // Ensure SSL verification is enabled
  },
});

// Apply the schema type to the drizzle function
const db = drizzle({ client: pool });

export default db;