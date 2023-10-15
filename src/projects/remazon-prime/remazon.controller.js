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
  console.log(updatedProject.id)
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
  console.log(updatedEmployee.id)
  const data = await service.updateEmployee(updatedEmployee.id, updatedEmployee);
  res.status(200).json({ data });
};

// Ranks ------------------------------------------------------------------>

async function listRanks(req, res) {
  let data = await service.listRanks();
  return res.json({data})
};

module.exports = {
  listProjects: [asyncErrorBoundary(listProjects)],
  createProject: [asyncErrorBoundary(createProject)],
  updateProject: [asyncErrorBoundary(updateProject)],
  listEmployees: [asyncErrorBoundary(listEmployees)],
  createEmployee: [asyncErrorBoundary(createEmployee)],
  updateEmployee: [asyncErrorBoundary(updateEmployee)],
  listRanks: [asyncErrorBoundary(listRanks)],
};