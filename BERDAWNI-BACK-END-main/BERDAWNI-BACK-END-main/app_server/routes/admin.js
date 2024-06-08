import express from 'express';
import { addAdmin, login } from '../controllers/admin.js';
import { sendEmail } from '../controllers/emails.js';
const router = express.Router();

router.post('/', login);
router.post('/addAdmin', addAdmin);
router.post('/sendEmail', sendEmail);

export default router;