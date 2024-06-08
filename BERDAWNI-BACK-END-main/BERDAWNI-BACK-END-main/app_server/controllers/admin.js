import Admin from "../models/admin.js";
import bcrypt from 'bcrypt'
const secret = 'BERDAWNISECRETLOGEDINADMINS';
import jwt from "jsonwebtoken";

export const addAdmin = async (req, res) => {
    try {
        const admin = new Admin(req.body);
        admin.createdAt = new Date();
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(admin.password, salt);
        const savedUser = await admin.save();
        res.json({ result: true, body: savedUser });
    } catch (e) {
        res.json({ result: false });
    }
}

export const login = async (req, res) => {
    try {
        let userData = req.body;
        Admin.findOne({ email: userData.email }, async (error, user) => {
            if (!user) {
                res.json({
                    result: true, body: {
                        status: 0
                    }
                });
            } else {
                var validPassword = await bcrypt.compare(userData.password, user.password);
                if (validPassword) {
                    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '24h' });
                    res.json({
                        result: true, body: {
                            status: 1,
                            token
                        }
                    });
                } else {
                    res.json({
                        result: true, body: {
                            status: 0
                        }
                    });
                }
            }
        })
    }
    catch (e) {
        res.json({
            result: false, body: {
                status: 0
            }
        });
    }
}