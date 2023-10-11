const router = require("express").Router();
const controller = require("./remazon.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router
  .route("/projects")
  .get(controller.listProjects)
  .post(controller.createProject)
  .all(methodNotAllowed);

router
.route("/employees")
.get(controller.listEmployees)
.post(controller.createEmployee)
.all(methodNotAllowed);

module.exports = router;