const service = require("./remazon.service");
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

async function list(req, res) {
  console.log("This hit DIFFERENT.");
  return res.sendStatus(204);
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};