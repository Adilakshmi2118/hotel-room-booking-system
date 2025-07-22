import express from 'express';
import { createBooking, getBookingsByUser } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createBooking);
router.get('/user/:email', getBookingsByUser);

export default router;
