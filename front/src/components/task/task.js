import './task.css'
import React, {useState} from 'react';
import {edit, remove} from "../../http/tasksAPI";

import favStar from '../../icons/favStar.png'
import favStarActive from '../../icons/favStarActive.png'
import share from '../../icons/share.png'
import trashcan from '../../icons/trashcan.png'
import Modal from "../modal/modal";

const Task = ({task,update}) => {
    const [item,setItem] = useState({id:task.id,shared:task.shared,name:task.name,favourite:task.favourite,completed:task.completed})
    const [hover, setHover] = useState(false)
    const [hidden, setHidden] = useState(true)
    const [description, setDescription] = useState(task.description)
    const [confirmModalActive, setConfirmModalActive] = useState(false)

    return (
        <>
            <div className={hover ? 'wrapper-item hover' : 'wrapper-item'} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <div className='button-area'>
                    <input type='checkbox' checked={item.completed} onClick={async ()=>{
                        setItem({id:item.id,shared:item.shared,name:item.name,favourite:item.favourite,completed:!item.completed})
                        await edit(item.id,{completed:!item.completed})
                    }}/>
                </div>
                <div onClick={()=>setHidden(!hidden)}>
                    {item.name}
                </div>
                <div className='button-area'>
                    <img src={item.favourite?favStarActive:favStar} width='18px' height='18px'
                         onClick={async ()=> {
                             setItem({id:item.id,shared:item.shared,name:item.name,favourite:!item.favourite,completed:item.completed})
                             await edit(item.id, {favourite: !item.favourite})
                         }}
                    />
                </div>
            </div>
            <div className={hidden?'edit-menu hidden':'edit-menu'}>
                <div>
                    <input value={description} onChange={e=> {
                        setDescription(e.target.value)
                    }}/>
                </div>
                <div className='button-bar'>
                    <img src={share} width='18px' height='18px' onClick={async ()=>{await edit(item.id, {shared: true})}}/>
                    <img src={trashcan} width='18px' height='18px' onClick={()=>setConfirmModalActive(true)}/>
                    <Modal setActive={setConfirmModalActive} active={confirmModalActive}>
                        <button onClick={async ()=>{
                            await remove(item.id)
                            update()
                        }}>Подтвердить</button>
                        <button onClick={()=>setConfirmModalActive(false)}>Отменить</button>
                    </Modal>
                    <button onClick={async ()=>{
                        await edit(item.id,{description: description})
                    }}>Сохранить</button>
                </div>
            </div>
        </>
    );
};

export default Task;