require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const HOSTNAME = process.env.HOSTNAME || 'localhost'
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandler')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)

app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,HOSTNAME,()=>console.log(`'server started on ${HOSTNAME}:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

