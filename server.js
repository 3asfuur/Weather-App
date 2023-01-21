const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize data object
let projectData = {};

// Website Folder
app.use(express.static("website"));

// GET route
app.get('/allData', (req, res) => {
  res.send(projectData);
});

// POST route
app.post('/addData', (req, res) => {
  const data = req.body;
  projectData = {
    temperature: data.temperature,
    currentDate: data.currentDate,
    userResponse: data.feelings
  };
  res.send(projectData);
});


// Server
const port = 8000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
