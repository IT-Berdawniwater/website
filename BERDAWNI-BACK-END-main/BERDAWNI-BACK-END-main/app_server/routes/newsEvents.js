import express from 'express';
import { addImage, addNews, allnews, deleteNews, oneNews, updateNews, updateNewsImages } from '../controllers/newsEvents.js';
const router = express.Router();
import { auth } from '../middleware/auth.js';
import upload from '../middleware/multer.js';

router.get('/allnews', allnews);
router.get('/:id/onenews', oneNews);
router.post('/addNews', auth, addNews);
router.post('/:type/:id/:name/addImage', upload.single('file'), addImage);
router.patch('/:id/updateNewsImages', auth, updateNewsImages);
router.patch('/:id/updateNews', auth, updateNews);
router.delete('/:id/deleteNews', auth, deleteNews);

export default router;
