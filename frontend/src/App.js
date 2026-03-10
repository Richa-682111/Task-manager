import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);

const API = "http://localhost:5000";

useEffect(() => {
  axios.get(API + "/tasks")
  .then(res => setTasks(res.data));
}, []);

const addTask = async () => {

  if(task.trim()==="") return;

  await axios.post(API + "/tasks", { task });

  setTasks([...tasks, task]);
  setTask("");
};

return (

<div className="container">

<div className="card">

<h1>Task Manager</h1>

<div className="inputBox">

<input
value={task}
onChange={(e)=>setTask(e.target.value)}
placeholder="Enter your task..."
/>

<button onClick={addTask}>
Add
</button>

</div>

<ul>

{tasks.map((t,i)=>(
<li key={i}>{t}</li>
))}

</ul>

</div>

</div>

);
}

export default App;