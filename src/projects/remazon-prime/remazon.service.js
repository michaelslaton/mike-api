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

function getEmployee(uid) {
  return knex("rem_employees")
    .where({ uid })
    .then((data) => data[0]);
};

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

function createRank(newRank) {
  return knex("rem_ranks")
    .insert(newRank)
    .returning("*")
    .then((data) => data[0]);
};

function updateRank(id, updatedRank) {
  return knex("rem_ranks")
    .where({ id })
    .update(updatedRank)
    .returning("*")
    .then((data) => data[0]);
};

// Users ----------------------------------------------------------------->

function createUser(newUser) {
  return knex("rem_users")
    .insert(newUser)
    .returning("*")
    .then((data) => data[0]);
};

// Applications ---------------------------------------------------------->

function listNotifications(){
  return knex("rem_notifications")
  .select("*")
  .orderBy("id");
};

function createNotification(newNotification) {
  return knex("rem_notifications")
    .insert(newNotification)
    .returning("*")
    .then((data) => data[0]);
};

module.exports = {
  // Projects -------------------------------------------------------------->
  listProjects,
  createProject,
  updateProject,
  // Employees ------------------------------------------------------------->
  getEmployee,
  listEmployees,
  createEmployee,
  updateEmployee,
  // Ranks ----------------------------------------------------------------->
  listRanks,
  createRank,
  updateRank,
  // Notifications ---------------------------------------------------------->
  listNotifications,
  createNotification,
};