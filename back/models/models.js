const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING}
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    shared: {type: DataTypes.BOOLEAN, defaultValue: false},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    favourite: {type: DataTypes.BOOLEAN, defaultValue: false},
    completed: {type: DataTypes.BOOLEAN, defaultValue: false},
})

User.hasMany(Task,{as:'user_id'})
Task.belongsTo(User)

module.exports = {
    User, Task
}