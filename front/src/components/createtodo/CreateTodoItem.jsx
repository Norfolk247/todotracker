import React, {useRef, useState} from 'react';
import './CreateTodoItem.css'
import share from '../../icons/share.png'
import trashcan from '../../icons/trashcan.png'
import pen from '../../icons/pen.jpg'
import ModalWindow from "../modal/ModalWindow";

const CreateTodoItem = (props) => {
    const checkboxvalue = useRef()
    const wrapper = useRef()
    const [active,setActive] = useState(false)

    const bg_change = () => {
        if (checkboxvalue.current.checked){
            wrapper.current.style='background: #676767FF'
        }
        else {
            wrapper.current.style='background: white'
        }
    }

    return (
        <div
            className='wrapper'
            ref={wrapper}
        >
            <div className='checkbox'>
                <input
                    ref={checkboxvalue}
                    type='checkbox'
                    onChange={bg_change}
                />
            </div>
            <div className='title'>{props.item.title}</div>
            <div className='description'>{props.item.description}</div>
            <div className='icon-buttons'>
                <img className='imageBtn' src={pen} alt='123' width='20px' height='20px' hspace='2px' vspace='2px' onClick={()=>setActive(true)}/>
                <ModalWindow active={active} setActive={setActive}>
                    <input/>
                    <input/>
                    <button>save</button>
                </ModalWindow>
                <img className='imageBtn' src={trashcan} alt='123' width='20px' height='20px' hspace='2px' vspace='2px'/>
                <img className='imageBtn' src={share} alt='123' width='20px' height='20px' hspace='2px' vspace='2px'/>
            </div>
        </div>
    );
};

export default CreateTodoItem;