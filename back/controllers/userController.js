const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/apiError')
const mailService = require('../service/mail-service')
const uuid = require('uuid')

generateJWT = (id,email) => {
    return jwt.sign(
        {id,email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email,password} = req.body
        if(!email || !password) {
            return next(ApiError.err('no email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.err('email exist'))
        }
        const hashPassword = await bcrypt.hash(password,3)
        const user = await User.create({email,password: hashPassword,firstName: email})
        const token = generateJWT(user.id,email)
        res.json({token})
    }

    async login(req, res, next) {
        try {
            const {email, password, firstName} = req.body
            if (!email&&!firstName) {
                return next(ApiError.err('no login'))
            }
            let user
            if (email) {
                user = await User.findOne({where: {email}})
            }
            if (firstName) {
                user = await User.findOne({where: {firstName}})
            }
            if (!user) {
                return next(ApiError.err("user doesn't exist"))
            }
            let comparepw = bcrypt.compareSync(password, user.password)
            if (!comparepw) {
                return next(ApiError.err('wrong password'))
            }
            const token = generateJWT(user.id, user.email)
            return res.json({token})
        } catch (e) {
            return next(ApiError.err(e))
        }
    }

    async check(req, res) {
        const token = generateJWT(req.user.id,req.user.email)
        return res.json({token})
    }

    async recover(req,res,next) {
        try {
            const {email} = req.body
            const recoverLink = uuid.v4()
            await mailService.sendPassword(email,`${process.env.HOSTNAME}:${process.env.PORT}/api/user/recoverpass/${recoverLink}`)
            return res.json('message send')
        } catch (e) {
            return next(ApiError.err(e))
        }
    }
}

module.exports = new UserController()