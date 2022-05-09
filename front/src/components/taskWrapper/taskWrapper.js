import './taskWrapper.css'
import React, {useState} from 'react';
import TaskInput from "../taskInput/taskInput";
import Filter from "../filter/filter";
import Task from "../task/task";
import {getAll} from "../../http/tasksAPI";

const TaskWrapper = ({tasks,setTasks,isLogged}) => {
    const update = () => {
        getAll().then(data=>setTasks(data))
    }
    const [filtered,setFiltered] = useState(tasks)

    return (
        <div className='wrapper'>
            <TaskInput setTasks={setTasks} isLogged={isLogged}/>
            {filtered.map(item=><Task key={item.id} task={item} update={update}/>)}
            <Filter tasks={tasks} setFiltered={setFiltered}/>
        </div>
    );
};

export default TaskWrapper;

