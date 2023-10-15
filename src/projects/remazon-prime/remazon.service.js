const knex = require("../../db/connections");

// Projects -------------------------------------------------------------->

function listProjects(){
  return knex("rem_projects")
  .select("*")
  .orderBy("name");
};

function createProject(project) {
  return knex("rem_projects")
    .insert(project)
    .returning("*")
    .then((data) => data[0]);
};

function updateProject(id, updateProject) {
  return knex("rem_projects")
    .where({ id })
    .update(updateProject)
    .returning("*")
    .then((data) => data[0]);
};

// Employees ------------------------------------------------------------->

function listEmployees(){
  return knex("rem_employees")
  .select("*")
  .orderBy("rank");
};

function createEmployee(employee) {
  return knex("rem_employees")
    .insert(employee)
    .returning("*")
    .then((data) => data[0]);
};

function updateEmployee(id, updatedEmployee) {
  return knex("rem_employees")
    .where({ id })
    .update(updatedEmployee)
    .returning("*")
    .then((data) => data[0]);
};

// Ranks ----------------------------------------------------------------->

function listRanks(){
  return knex("rem_ranks")
  .select("*")
  .orderBy("rank");
};

// Users ----------------------------------------------------------------->

function getUser(uid) {
  return knex("rem_users")
    .where({ uid });
};

function createUser(newUser) {
  return knex("rem_users")
    .insert(newUser)
    .returning("*")
    .then((data) => data[0]);
};

module.exports = {
  listProjects,
  createProject,
  updateProject,
  listEmployees,
  createEmployee,
  updateEmployee,
  listRanks,
  getUser,
  createUser,
};