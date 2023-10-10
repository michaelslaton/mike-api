exports.up = function (knex) {
  return knex.schema.createTable("rem_projects", (table) => {
    table.increments("id").primary().unsigned();
    table.string("name").notNullable();
    table.number("host").notNullable();
    table.string("type").notNullable();
    table.string("description").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_projects");
};