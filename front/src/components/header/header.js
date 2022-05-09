import React, {useEffect, useState} from 'react';
import './header.css'
import {check, login, registration} from "../../http/userAPI";
import {getAll} from "../../http/tasksAPI";


const Header = ({setTasks,isLogged,setLogged}) => {
    const [isOver, setOver] = useState(false)

    const [isActive, setActive] = useState(false)

    const [_login,setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    useEffect(()=>{
        check().then(data=>{
            setLogged(true)
            setLogin(data.email)
            getAll().then(data=>setTasks(data))
        },()=> {
            setLogged(false)
            setTasks([])
        })
    },[isLogged])

    return (
        <div>
            <div className='header'>
                <div className='title'>ToDo</div>
                <div
                    className={isOver ? 'profile over' : 'profile'}
                    onMouseOver={()=>setOver(true)}
                    onMouseLeave={()=>setOver(false)}
                    onClick={()=>setActive(!isActive)}
                >
                    <div className='profile-icon'/>
                </div>
            </div>
            <div className={isActive?'login-menu active':'login-menu'}>
                <div className={isLogged?'login-stage':'login-stage active'}>
                    <input value={_login} onChange={e=>{setLogin(e.target.value)}}/>
                    <br/>
                    <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}}/>
                    <br/>
                    {error}
                    <br/>
                    <button onClick={()=>login(_login,password,_login).then(()=> {
                        setLogged(true)
                        setError('')
                        getAll().then(data=>setTasks(data))
                    },()=>setError('Неправильный логин или пароль'))}>Войти</button>
                    <br/>
                    <button onClick={()=>registration(_login,password).then(()=> {
                        setLogged(true)
                        setError('')
                    },()=>setError('Пользователь существует'))}>Зарегистрироваться</button>
                </div>
                <div className={isLogged?'logout-stage active':'logout-stage'}>
                    {_login}
                    <br/>
                    <button onClick={()=>{
                        setLogin('')
                        setPassword('')
                        setLogged(false)
                        localStorage.removeItem('token')
                    }}>Выйти</button>
                </div>
            </div>
        </div>
    );
};

export default Header;