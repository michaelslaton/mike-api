const service = require("./remazon.service");
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

// Projects -------------------------------------------------------------->

async function listProjects(req, res) {
  let data = await service.listProjects();
  return res.json({data});
};

async function createProject(req,res) {
  let newProject = req.body;
  const data = await service.createProject(newProject);
  res.status(201).json({ data });
};

async function updateProject(req, res) {
  const updatedProject = req.body;
  const data = await service.updateProject(updatedProject.id, updatedProject);
  res.status(200).json({ data });
};

// Employees ------------------------------------------------------------->

async function listEmployees(req, res) {
  let data = await service.listEmployees();
  return res.json({data})
};

async function createEmployee(req,res) {
  let newEmployee = req.body;
  const data = await service.createEmployee(newEmployee);
  res.status(201).json({ data });
};

async function updateEmployee(req, res) {
  const updatedEmployee = req.body;
  const data = await service.updateEmployee(updatedEmployee.id, updatedEmployee);
  res.status(200).json({ data });
};

// Ranks ------------------------------------------------------------------>

async function listRanks(req, res) {
  let data = await service.listRanks();
  return res.json({data})
};

async function createRank(req,res) {
  let newRank = req.body;
  const data = await service.createRank(newRank);
  res.status(201).json({ data });
};

async function updateRank(req, res) {
  const updatedRank = req.body;
  const data = await service.updateRank(updatedRank.id, updatedRank);
  res.status(200).json({ data });
};

// User ------------------------------------------------------------------->

async function getUser(req, res) {
  const { uid } = req.params;
  const data = await service.getUser(uid);
  res.status(200).json({ data });
};

async function createUser(req,res) {
  let newUser = req.body;
  const data = await service.createUser(newUser);
  res.status(201).json({ data });
};

module.exports = {
  // Projects -------------------------------------------------------------->
  listProjects: [asyncErrorBoundary(listProjects)],
  createProject: [asyncErrorBoundary(createProject)],
  updateProject: [asyncErrorBoundary(updateProject)],
  // Employees ------------------------------------------------------------->
  listEmployees: [asyncErrorBoundary(listEmployees)],
  createEmployee: [asyncErrorBoundary(createEmployee)],
  updateEmployee: [asyncErrorBoundary(updateEmployee)],
  // Ranks ------------------------------------------------------------------>
  listRanks: [asyncErrorBoundary(listRanks)],
  createRank: [asyncErrorBoundary(createRank)],
  updateRank: [asyncErrorBoundary(updateRank)],
  // User ------------------------------------------------------------------->
  getUser: [asyncErrorBoundary(getUser)],
  createUser: [asyncErrorBoundary(createUser)],
};