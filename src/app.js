const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const notFoundHandler = require("./errors/notFoundHandler");
const errorHandler = require("./errors/errorHandler");
const portfolioRouter = require("./projects/portfolio/portfolio.router");
const remazonRouter = require("./projects/remazon-prime/remazon.router");

const app = express();
 
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

app.use("/remazon", remazonRouter);
app.use("/portfolio", portfolioRouter);
 
app.use(notFoundHandler);
app.use(errorHandler);
 
module.exports = app;