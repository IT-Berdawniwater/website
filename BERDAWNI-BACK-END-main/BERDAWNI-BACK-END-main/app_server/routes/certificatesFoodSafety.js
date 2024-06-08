import express from 'express';
import { allCert, addImage, oneCert, addCert, updateCert, deleteCert } from '../controllers/certificatesFoodSafety.js';
const router = express.Router();
import { auth } from '../middleware/auth.js';
import upload from '../middleware/multer.js';

router.get('/allCert', allCert);
router.get('/:id/oneCert', oneCert);
router.post('/addCert', auth, addCert);
router.post('/:type/:id/:name/addImage', upload.single('file'), addImage);
router.patch('/:id/updateCert', auth, updateCert);
router.delete('/:id/deleteCert', auth, deleteCert);

export default router;
