// seed.js (ESM version)
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Room from './models/Room.js';
import dummyRooms from './data/dummyRooms.js'; // Create this file for dummy data

dotenv.config();
await connectDB();

try {
  await Room.deleteMany();
  await Room.insertMany(dummyRooms);
  console.log("✅ Rooms seeded successfully");
  process.exit();
} catch (err) {
  console.error("❌ Seeding error:", err);
  process.exit(1);
}
