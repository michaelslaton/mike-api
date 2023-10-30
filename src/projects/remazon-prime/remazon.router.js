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
  .route("/employees/:uid")
  .get(controller.getEmployee)
  .all(methodNotAllowed);
  
router
  .route("/ranks")
  .get(controller.listRanks)
  .post(controller.createRank)
  .put(controller.updateRank)
  .all(methodNotAllowed);

  router
    .route("/notifications")
    .get(controller.listNotifications)
    .post(controller.createNotification)
    .all(methodNotAllowed);

module.exports = router;