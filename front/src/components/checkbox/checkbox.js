import React, {useState} from 'react';

const Checkbox = (param) => {
    console.log(param)
    const [isChecked, setChecked] = useState(false)
    return (
        <label>
            <input type="checkbox" onChange={()=>setChecked(!isChecked)}/>
            <span className={`checkbox ${isChecked ? 'checkbox--active' : ''}`} aria-hidden={true}/>
        </label>
    );
};

export default Checkbox;