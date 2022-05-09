import './App.css';
import React, {useState} from "react";
import Header from "./components/header/header";
import TaskWrapper from "./components/taskWrapper/taskWrapper";

function App() {
    const [tasks, setTasks] = useState([])
    const [isLogged, setLogged] = useState(false)
    return (
        <div className="App">
            <Header setTasks={setTasks} isLogged={isLogged} setLogged={setLogged}/>
            <TaskWrapper tasks={tasks} setTasks={setTasks} isLogged={isLogged}/>
        </div>
  );
}

export default App;
