import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // other fields...
});

export default (conn) => conn.model('User', userSchema);
