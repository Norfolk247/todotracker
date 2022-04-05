const nodemailer = require('nodemailer')
class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendPassword(to,link) {
        console.log(to,link)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `password recover on ${process.env.HOSTNAME}`,
            text:'',
            html:
            `
            <a href="${link}">${link}</a>
            `
        })
    }
}

module.exports = new MailService()