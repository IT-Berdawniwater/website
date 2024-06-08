import express from 'express';
import { allSettings, emailSettings, addSetting, updateSetting } from '../controllers/settings.js';
const router = express.Router();
import { auth } from '../middleware/auth.js';

router.get('/emailSettings', emailSettings);
router.get('/allSettings', auth, allSettings);
router.post('/addSetting', auth, addSetting);
router.patch('/updateSetting', auth, updateSetting);

export default router;
