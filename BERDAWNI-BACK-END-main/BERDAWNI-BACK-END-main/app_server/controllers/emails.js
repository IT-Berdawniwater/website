import nodemailer from 'nodemailer'
import Settings from "../models/settings.js"

export const sendEmail = async (req, res) => {
    try {
        const comp = await Settings.find();
        const sett = comp[0];
        let transporter = nodemailer.createTransport({
            host: sett.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: sett.MAIL_USER,
                pass: sett.MAIL_PASS
            }
        });
        let mailOptions = {
            from: sett.MAIL_USER,
            to: req.body.email,
            subject: req.body.subject, // Subject line
            html: `${req.body.html}`
        };
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log(err);
                res.status(404).send();
            } else {
                res.send({ result: true });
            }
        });
    } catch (e) {
        console.log(e);
        res.json({ result: false });
    }
}