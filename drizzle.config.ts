import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "", 10) || 5432,
    user: process.env.DB_USER || "default_user",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "default_db",
    ssl: false,
  },
});
