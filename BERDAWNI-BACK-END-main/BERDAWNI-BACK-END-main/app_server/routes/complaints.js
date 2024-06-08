import express from 'express';
import { allComplaints, addComplaints, viewComplaints } from '../controllers/complaints.js';
const router = express.Router();
import { auth } from '../middleware/auth.js';

router.get('/allComplaints', auth, allComplaints);
router.post('/addComplaints', addComplaints);
router.patch('/:id/viewComplaints', auth, viewComplaints);

export default router;