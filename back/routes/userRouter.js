const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMW = require('../middleware/authMiddleWare')

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/check',authMW,userController.check)
router.get('/recover',userController.recover)

module.exports = router