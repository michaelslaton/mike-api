exports.up = function (knex) {
  return knex.schema.createTable("rem_employees", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.dateTime("birthday").defaultTo(null);
    table.integer("rank").notNullable().defaultTo(5);
    table.string("description")
    table.boolean("status").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_employees");
};