import React, {useState} from 'react';
import Header from "../components/header/header";
import TaskWrapper from "../components/taskWrapper/taskWrapper";

const Main = ({isLogged, setLogged}) => {
    const [tasks, setTasks] = useState([])
    return (
        <>
            <Header setTasks={setTasks} isLogged={isLogged} setLogged={setLogged}/>
            <TaskWrapper tasks={tasks} setTasks={setTasks} isLogged={isLogged}/>
        </>
    );
};

export default Main;