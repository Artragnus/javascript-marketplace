/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  await knex.schema
    .createTable("categories", (table) => {
      table.increments("id").primary();
      table.text("categorie_name").notNullable();
    })
    .then(() => {
      return knex("categories").insert([
        { categorie_name: "Masculino" },
        { categorie_name: "Feminino" },
      ]);
    });

  await knex.schema
    .createTable("subcategories_male", (table) => {
      table.increments("id").primary();
      table.integer("categorie_id").notNullable().defaultTo(1);
      table.text("categorie_name").notNullable();

      table.foreign("categorie_id").references("id").inTable("categories");
    })
    .then(() => {
      return knex("subcategories_male").insert([
        { categorie_name: "Roupas" },
        { categorie_name: "Calçados" },
      ]);
    });

  await knex.schema
    .createTable("subcategories_clothes_male", (table) => {
      table.increments("id").primary();
      table.integer("subcategorie_id").notNullable().defaultTo(1);
      table.text("categorie_name").notNullable();

      table
        .foreign("subcategorie_id")
        .references("id")
        .inTable("subcategories_male");
    })
    .then(() => {
      return knex("subcategories_clothes_male").insert([
        { categorie_name: "Blusas" },
        { categorie_name: "Camisas" },
        { categorie_name: "Camisetas" },
        { categorie_name: "Shorts" },
        { categorie_name: "Calças" },
      ]);
    });

  await knex.schema
    .createTable("subcategories_sneakers_male", (table) => {
      table.increments("id").primary();
      table.integer("subcategorie_id").notNullable().defaultTo(2);
      table.text("categorie_name");

      table
        .foreign("subcategorie_id")
        .references("id")
        .inTable("subcategories_male");
    })
    .then(() => {
      return knex("subcategories_sneakers_male").insert([
        { categorie_name: "Tênis" },
        { categorie_name: "Sapatos" },
      ]);
    });

  await knex.schema
    .createTable("subcategories_female", (table) => {
      table.increments("id").primary();
      table.integer("categorie_id").notNullable().defaultTo(2);
      table.text("categorie_name").notNullable();

      table.foreign("categorie_id").references("id").inTable("categories");
    })
    .then(() => {
      return knex("subcategories_female").insert([
        { categorie_name: "Roupas" },
        { categorie_name: "Calçados" },
      ]);
    });

  await knex.schema
    .createTable("subcategories_clothes_female", (table) => {
      table.increments("id").primary();
      table.integer("subcategorie_id").notNullable().defaultTo(1);
      table.text("categorie_name");

      table
        .foreign("subcategorie_id")
        .references("id")
        .inTable("subcategories_female");
    })
    .then(() => {
      return knex("subcategories_clothes_female").insert([
        { categorie_name: "Blusas" },
        { categorie_name: "Camisas" },
        { categorie_name: "Camisetas" },
        { categorie_name: "Shorts" },
        { categorie_name: "Calças" },
        { categorie_name: "Saias" },
      ]);
    });

  await knex.schema
    .createTable("subcategories_sneakers_female", (table) => {
      table.increments("id").primary();
      table.integer("subcategorie_id").notNullable().defaultTo(2);
      table.text("categorie_name");

      table
        .foreign("subcategorie_id")
        .references("id")
        .inTable("subcategories_female");
    })
    .then(() => {
      return knex("subcategories_sneakers_female").insert([
        { categorie_name: "Tênis" },
        { categorie_name: "Sandálias" },
        { categorie_name: "Saltos" },
        { categorie_name: "Botas" },
      ]);
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {}
