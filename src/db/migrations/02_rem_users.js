exports.up = function (knex) {
  return knex.schema.createTable("rem_users", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.string("uid").notNullable();
    table.boolean("admin").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_users");
};