import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    const {
      name, email, checkIn, checkOut, guests,
      payment: paymentMode, roomName: roomType, roomImage,
    } = req.body;

    const newBooking = new Booking({
      name,
      email,
      checkIn,
      checkOut,
      guests,
      paymentMode,
      roomType,
      roomImage,
      user: req.user._id,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookingsByUser = async (req, res) => {
  const { email } = req.params;
  try {
    const bookings = await Booking.find({ email });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
