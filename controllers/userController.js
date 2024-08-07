import createUserModel from '../models/User.js';

export const registerUser = async (req, res) => {
  const User = createUserModel(req.db);
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
