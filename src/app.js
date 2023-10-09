const express = require("express");
const morgan = require("morgan");
const notFoundHandler = require("./errors/notFoundHandler");
const errorHandler = require("./errors/errorHandler");
const cors = require("cors");
const app = express();

const portfolioRouter = require("./projects/portfolio/portfolio.router")
 
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

app.use("/portfolio", portfolioRouter)
 

//Not found handler
app.use(notFoundHandler);
//error handler
app.use(errorHandler);
 
module.exports = app;