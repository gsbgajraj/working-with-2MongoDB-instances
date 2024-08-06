import createBookingModel from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const Booking = createBookingModel(req.db);
  const { date, user } = req.body;

  try {
    const booking = new Booking({ date, user });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
