const service = require("./remazon.service");
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

// Projects -------------------------------------------------------------->

async function listProjects(req, res) {
  let data = await service.listProjects();
  return res.json({data})
};

async function createProject(req,res) {
  let newProject = req.body;
  const data = await service.createProject(newProject);
  res.status(201).json({ data });
}

// Employees ------------------------------------------------------------->

async function listEmployees(req, res) {
  let data = await service.listEmployees();
  return res.json({data})
};

async function createEmployee(req,res) {
  let newEmployee = req.body;
  const data = await service.createEmployee(newEmployee);
  res.status(201).json({ data });
}

module.exports = {
  listProjects: [asyncErrorBoundary(listProjects)],
  createProject: [asyncErrorBoundary(createProject)],
  listEmployees: [asyncErrorBoundary(listEmployees)],
  createEmployee: [asyncErrorBoundary(createEmployee)],
};