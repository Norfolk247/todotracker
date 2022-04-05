import './ModalWindow.css'
import React, {useState} from 'react';

const ModalWindow = ({active, setActive, children}) => {
    /*const [title,setTitle] = useState()
    const [description,setDescription] = useState()*/
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {/*<input className='title' value={title} onChange={e => setTitle(e.target.value)}/>
                <input className='description' value={description} onChange={e => setDescription(e.target.value)}/>
                <button className='createtodobutton'>save</button>*/}
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
