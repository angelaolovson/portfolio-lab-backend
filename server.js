// Import Dependencies
require("dotenv").config()
const {PORT} = process.env
const express = require("express");
const cors = require("cors");
const app = express();

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// set up middleware
app.use(cors());
app.use(express.json()); // parse json bodies

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send projects via JSON
  res.json(about);
});

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));