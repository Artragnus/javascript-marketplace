/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const maleGender = 1;
const femaleGender = 2;
const unissex = 3;

const clothes = 1;
const sneakers = 2;

export async function up(knex) {
  await knex.schema
    .createTable("genres", (table) => {
      table.increments("id").primary();
      table.text("gender").notNullable();
    })
    .then(() => {
      return knex("genres").insert([
        { gender: "Masculino" },
        { gender: "Feminino" },
        { gender: "Unissex" },
      ]);
    });

  await knex.schema
    .createTable("categories", (table) => {
      table.increments("id").primary();
      table.text("categorie_name").notNullable();
    })
    .then(() => {
      return knex("categories").insert([
        { categorie_name: "Roupas" },
        { categorie_name: "Calçados" },
      ]);
    });

  await knex.schema
    .createTable("clothes_categories", (table) => {
      table.increments("id").primary();
      table.integer("categorie_id").notNullable().defaultTo(clothes);
      table.text("categorie_name").notNullable();
      table.integer("gender_id").notNullable();

      table.foreign("categorie_id").references("id").inTable("categories");
      table.foreign("gender_id").references("id").inTable("genres");
    })
    .then(() => {
      return knex("clothes_categories").insert([
        { categorie_name: "Blusas", gender_id: maleGender },
        { categorie_name: "Camisas", gender_id: maleGender },
        { categorie_name: "Camisetas", gender_id: maleGender },
        { categorie_name: "Shorts", gender_id: maleGender },
        { categorie_name: "Calças", gender_id: maleGender },
        { categorie_name: "Blusas", gender_id: femaleGender },
        { categorie_name: "Camisas", gender_id: femaleGender },
        { categorie_name: "Camisetas", gender_id: femaleGender },
        { categorie_name: "Shorts", gender_id: femaleGender },
        { categorie_name: "Calças", gender_id: femaleGender },
        { categorie_name: "Saias", gender_id: femaleGender },
      ]);
    });

  await knex.schema
    .createTable("sneakers_categories", (table) => {
      table.increments("id").primary();
      table.integer("categorie_id").notNullable().defaultTo(sneakers);
      table.text("categorie_name").notNullable();
      table.integer("gender_id").notNullable();

      table.foreign("categorie_id").references("id").inTable("categories");
      table.foreign("gender_id").references("id").inTable("genres");
    })
    .then(() => {
      return knex("sneakers_categories").insert([
        { categorie_name: "Tênis", gender_id: maleGender },
        { categorie_name: "Sapatos", gender_id: maleGender },

        { categorie_name: "Tênis", gender_id: femaleGender },
        { categorie_name: "Sandálias", gender_id: femaleGender },
        { categorie_name: "Saltos", gender_id: femaleGender },
        { categorie_name: "Botas", gender_id: femaleGender },
      ]);
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("genres");
  await knex.schema.dropTable("categories");
  await knex.schema.dropTable("clothes_categories");
  await knex.schema.dropTable("sneakers_categories");
}
