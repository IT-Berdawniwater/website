import Settings from "../models/settings.js"

export const emailSettings = async (req, res) => {
    try {
        const comp = await Settings.find();
        res.json({ result: true, body: comp[0].MAIL_USER });
    } catch (e) {
        res.json({ result: false });
    }
}

export const allSettings = async (req, res) => {
    try {
        const comp = await Settings.find();
        res.json({ result: true, body: comp[0] });
    } catch (e) {
        res.json({ result: false });
    }
}

export const addSetting = async (req, res) => {
    try {
        const comp = await Settings.create(req.body);
        res.json({ result: true, body: comp });
    } catch (e) {
        res.json({ result: false });
    }
}

export const updateSetting = async (req, res) => {
    try {
        const sett = await Settings.find();
        const comp = await Settings.updateOne(
            { _id: sett[0]._id.toString() },
            {
                $set: {
                    MAIL_HOST: req.body.MAIL_HOST,
                    MAIL_USER: req.body.MAIL_USER,
                    MAIL_PASS: req.body.MAIL_PASS,
                }
            }
        );
        res.json({ result: true, body: comp });
    } catch (e) {
        res.json({ result: false });
    }
}