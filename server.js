// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import userRoutes from './routes/userRoutes.js';
// import bookingRoutes from './routes/bookingRoutes.js';

// dotenv.config();

// const app = express();
// app.use(express.json());

// // Connect to databases
// const { conn1, conn2 } = await connectDB();

// // Pass connections to routes
// app.use('/api/users', (req, res, next) => {
//   req.db = conn1;
//   next();
// }, userRoutes);

// app.use('/api/bookings', (req, res, next) => {
//   req.db = conn2;
//   next();
// }, bookingRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to databases
connectDB().then(({ conn1, conn2 }) => {
  // Pass connections to routes
  app.use('/api/users', (req, res, next) => {
    req.db = conn1;
    next();
  }, userRoutes);

  app.use('/api/bookings', (req, res, next) => {
    req.db = conn2;
    next();
  }, bookingRoutes);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
  console.error(`Error: ${error.message}`);
});
