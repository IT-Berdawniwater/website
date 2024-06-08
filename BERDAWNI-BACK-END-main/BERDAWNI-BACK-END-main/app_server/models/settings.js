// JavaScript source code

import mongoose from 'mongoose'

const SettingsSchema = mongoose.Schema({
    MAIL_HOST: String,
    MAIL_USER: String,
    MAIL_PASS: String,
})
const Settings = mongoose.model('Settings', SettingsSchema);

export default Settings;