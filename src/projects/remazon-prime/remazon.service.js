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
}

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
}

module.exports = {
  listProjects,
  createProject,
  listEmployees,
  createEmployee,
}