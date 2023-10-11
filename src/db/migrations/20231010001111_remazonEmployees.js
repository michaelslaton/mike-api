exports.up = function (knex) {
  return knex.schema.createTable("rem_employees", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.dateTime("birthday");
    table.integer("rank").unsigned().notNullable();
    table.string("description");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_employees");
};