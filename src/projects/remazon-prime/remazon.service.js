const knex = require("../../db/connections");
const projectsDatabase = "rem_projects";
const employeesDatabase = "rem_employees";

// Projects -------------------------------------------------------------->

function listProjects(){
  return knex(projectsDatabase)
  .select("*")
  .orderBy("name");
};

function createProject(project) {
  return knex(projectsDatabase)
    .insert(project)
    .returning("*")
    .then((data) => data[0]);
};

function updateProject(id, updateProject) {
  return knex(projectsDatabase)
    .where({ id })
    .update(updateProject)
    .returning("*")
    .then((data) => data[0]);
};

// Employees ------------------------------------------------------------->

function listEmployees(){
  return knex(employeesDatabase)
  .select("*")
  .orderBy("rank");
};

function createEmployee(employee) {
  return knex(employeesDatabase)
    .insert(employee)
    .returning("*")
    .then((data) => data[0]);
};

function updateEmployee(id, updatedEmployee) {
  return knex(employeesDatabase)
    .where({ id })
    .update(updatedEmployee)
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
};