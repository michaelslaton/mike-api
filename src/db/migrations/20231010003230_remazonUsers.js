exports.up = function (knex) {
  return knex.schema.createTable("rem_users", (table) => {
    table.increments("id").primary().unsigned();
    table.string("name").notNullable();
    table.string("uid").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_users");
};