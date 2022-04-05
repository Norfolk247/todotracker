const Router = require('express')
const router = new Router()
const taskController = require('../controllers/taskController')
const authMW = require('../middleware/authMiddleWare')

router.post('/create',authMW,taskController.create)
router.get('/all',authMW,taskController.getAll)
router.get('/id',authMW,taskController.getId)
router.delete('/delete',authMW,taskController.delete)
router.patch('/edit',authMW,taskController.edit)

module.exports = router