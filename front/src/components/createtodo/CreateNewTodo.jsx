import React, {useState} from 'react';
import ModalWindow from "../modal/ModalWindow";

const CreateNewTodo = ({active,setActive}) => {
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    return (
        <ModalWindow active={active} setActive={setActive}>
            <div className='modal_text'>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
                <input value={description} onChange={e => setDescription(e.target.value)}/>
                <button>save</button>
            </div>
        </ModalWindow>
    );
};

export default CreateNewTodo;