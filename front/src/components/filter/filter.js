import React, {useEffect, useState} from 'react';

const Filter = ({tasks,setFiltered}) => {
    const [filter,setFilter] = useState({completed:'',favourite:false})
    useEffect(()=>{
        if (filter.completed === '' && filter.favourite === false) {
            setFiltered(tasks)
        }
        else if (filter.favourite === true && filter.completed !== '') {
            setFiltered(tasks.filter(item=>item.favourite === filter.favourite && item.completed === filter.completed))
        } else if (filter.completed !== '') {
            setFiltered(tasks.filter(item=>item.completed === filter.completed))
        } else {
            setFiltered(tasks.filter(item=>item.favourite === true))
        }
    },[filter,tasks])
    return (
        <>
            <button onClick={()=>{
                setFilter({completed:'',favourite:false})
            }}>Все</button>
            <button onClick={()=>{
                setFilter({completed: true,favourite: filter.favourite})
            }}>Выполненные</button>
            <button onClick={()=>{
                setFilter({completed: false,favourite: filter.favourite})
            }}>Не выполненные</button>
            <button onClick={()=>{
                setFilter({completed: filter.completed,favourite: true})
            }}>Избранные</button>
        </>
    );
};

export default Filter;