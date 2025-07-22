import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: String,
  email: String,
  checkIn: Date,
  checkOut: Date,
  guests: Number,
  paymentMode: String,
  roomType: String,
  roomImage: String,
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
