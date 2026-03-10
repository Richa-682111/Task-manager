const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// add task
app.post("/tasks", (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json({ message: "Task added" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});