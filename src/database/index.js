import "dotenv/config";
import knex from "knex";

export const config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: 5441,
    user: "postgres",
    password: "postgres",
    database: "marketplace",
  },
  migrations: {
    directory: "./src/database/migrations",
  },
};

export const db = knex(config);
