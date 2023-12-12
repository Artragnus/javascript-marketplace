import "dotenv/config";
import knex from "knex";

const teste = process.env.DB_HOST;

export const config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: "./database/migrations",
    loadExtensions: [".cjs"],
  },
};

console.log(config);
console.log(teste);

export const db = knex(config);
