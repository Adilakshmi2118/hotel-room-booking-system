import express from 'express';
import { getAllRooms, getRoomById } from '../controllers/roomController.js';

const router = express.Router();

// GET all rooms
router.get('/', getAllRooms);

// ✅ GET single room by ID
router.get('/:id', getRoomById);

export default router;
