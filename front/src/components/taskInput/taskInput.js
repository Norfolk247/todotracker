import './taskInput.css'
import React, {useEffect, useState} from 'react';
import {create, getAll} from "../../http/tasksAPI";
import {check} from "../../http/userAPI";

const TaskInput = ({setTasks,isLogged}) => {
    const [description,setDescription] = useState('')
    const [name,setName] = useState('')
    const [hidden, setHidden] = useState(true)

    useEffect(()=>{
        check().then(()=>{
            setHidden(false)
        },()=>{
            setHidden(true)
        })
    },[isLogged])

    return (
        <div className='taskInput'>
            <div hidden={hidden}>
                <input value={name} onChange={e=>setName(e.target.value)}/>
                <br/>
                <input value={description} onChange={e=>setDescription(e.target.value)}/>
                <br/>
                <button onClick={async ()=> {
                    if (name) {
                        await create(name, description)
                        setName('')
                        setDescription('')
                        getAll().then(data=>{
                            setTasks(data)
                        })
                    }
                }}>Добавить</button>
            </div>
            <div hidden={!hidden}>Зайдите в учетную запись или зарегистрируйтесь, чтобы создать</div>
        </div>
    );
};

export default TaskInput;