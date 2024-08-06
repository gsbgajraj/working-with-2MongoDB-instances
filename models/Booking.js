import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  date: String,
  user: String,
  // other fields...
});

export default (conn) => conn.model('Booking', bookingSchema);
