import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode'

export const registration = async (email,password) => {
    const {data} = await $host.post('/api/user/registration',{email,password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email='',password,firstName='') => {
    const {data} = await $host.post('/api/user/login',{email,password,firstName})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    const response = await $authHost.get('/api/user/check')
    return jwt_decode(response.data.token)
}
export const recover = async (email) => {
    const response = await $host.get('/api/user/recover',)
    return response
}
export const recoverpass = async (password) => {
    const response = await $host.get('/api/user/recoverpass',)
    return response
}