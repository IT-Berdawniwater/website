import express from 'express';
import { addImage, addProd, allproducts, deleteProd, oneprod, updateProd, updateProdImages } from '../controllers/product.js';
const router = express.Router();
import { auth } from '../middleware/auth.js';
import upload from '../middleware/multer.js';

router.get('/allproducts', allproducts);
router.get('/:id/oneprod', oneprod);
router.post('/addProd', auth, addProd);
router.post('/:type/:id/:name/addImage', upload.single('file'), addImage);
router.patch('/:id/updateProdImages', auth, updateProdImages);
router.patch('/:id/updateProd', auth, updateProd);
router.delete('/:id/deleteProd', auth, deleteProd);

export default router;
