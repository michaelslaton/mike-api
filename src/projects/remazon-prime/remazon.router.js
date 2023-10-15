const router = require("express").Router();
const controller = require("./remazon.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router
  .route("/projects")
  .get(controller.listProjects)
  .post(controller.createProject)
  .put(controller.updateProject)
  .all(methodNotAllowed);
  
router
  .route("/employees")
  .get(controller.listEmployees)
  .post(controller.createEmployee)
  .put(controller.updateEmployee)
  .all(methodNotAllowed);
    
router
  .route("/users")
  .post(controller.createUser)
  .all(methodNotAllowed);

router
  .route("/users/:uid")
  .get(controller.getUser)
  .all(methodNotAllowed);
  
router
  .route("/ranks")
  .get(controller.listRanks)
  .all(methodNotAllowed);

module.exports = router;