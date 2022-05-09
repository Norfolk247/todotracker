import {$authHost} from "./index";

export const create = async (name,description) => {
    const {data} = await $authHost.post('/api/tasks/create',{name,description})
    return data
}
export const getAll = async () => {
    const {data} = await $authHost.get('/api/tasks/all')
    return data
}
export const getId = async (id) => {
    const {config} = await $authHost.get('/api/tasks/id?id='+id)
    return config
}
export const remove = async (id) => {
    const {config} = await $authHost.delete('/api/tasks/delete?id='+id)
    return config
}
export const edit = async (id,args) => {
    const {data} = await $authHost.patch('/api/tasks/edit?id='+id,args)
    return data
}