const {Task} = require('../models/models')
const ApiError = require('../error/apiError')

class TaskController {
    async create(req,res,next) {
        try {
            const {name, description} = req.body
            const task = await Task.create({name, description, userId: req.user.id})
            return res.json(task)
        } catch (e) {
            return next(ApiError.err(e))
        }
    }

    async edit(req,res,next) {
        try {
            const {id,shared,name,description,favourite,completed} = req.body
            let task = await Task.update(
                {shared,name,description,favourite,completed},
                {where: {id,userId:req.user.id}}
            )
            if (task[0] === 0) {
                return next(ApiError.err('there is no task with that id'))
            }
            return res.json(task)
        } catch (e) {
            return next(ApiError.err(e))
        }
    }

    async getId(req,res,next) {
        const {id} = req.body
        let task = await Task.findOne({where: {id}})
        if (task.userId === req.user.id) {
            return res.json(task)
        } else {
            task = await Task.findOne({where:{id,shared: true}})
        }
        if (task) {
            return res.json(task)
        }
        return next(ApiError.err('no task with such id'))
    }

    async getAll(req,res,next) {
        try {
            const userId = req.user.id
            let tasks = await Task.findAll({where: {userId}})
            return res.json(tasks)
        } catch (e) {
            return next(ApiError.err(e))
        }
    }

    async delete(req,res,next) {
        try {
            const {id} = req.body
            let task = await Task.destroy({where:{id,userId:req.user.id}})
            if (task === 0) {
                return next(ApiError.err('there is no task with that id'))
            }
            return res.json(task)
        } catch (e) {
            return next(ApiError.err(e))
        }
    }
}

module.exports = new TaskController()