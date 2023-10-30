exports.up = function (knex) {
  return knex.schema.createTable("rem_applications", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("type").notNullable();
    table.integer("user").notNullable();
    table
      .foreign("user")
      .references("id")
      .inTable("rem_users");
    table.integer("requestedEmployee").notNullable();
    table
      .foreign("requestedEmployee")
      .references("id")
      .inTable("rem_employees");
    table.string("message").defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_applications");
};