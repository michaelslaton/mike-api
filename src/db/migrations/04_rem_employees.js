exports.up = function (knex) {
  return knex.schema.createTable("rem_employees", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.integer("employee assigned").defaultTo(null);
    table
      .foreign("employee assigned")
      .references("id")
      .inTable("rem_employees");
    table.dateTime("birthday").defaultTo(null);
    table.integer("rank").unsigned().notNullable();
    table
      .foreign("rank")
      .references("id")
      .inTable("rem_ranks");
    table.string("description")
    table.boolean("status").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_employees");
};