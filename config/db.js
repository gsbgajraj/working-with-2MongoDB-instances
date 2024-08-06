// import mongoose from 'mongoose';
// import dotenv from 'dotenv'

// dotenv.config()

// const connectDB = async () => {
//   try {
//     const conn1 = await mongoose.createConnection(process.env.MONGO_URI_USERS, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const conn2 = await mongoose.createConnection(process.env.MONGO_URI_BOOKINGS, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: UsersDB - ${conn1.host}, BookingsDB - ${conn2.host}`);

//     return { conn1, conn2 };
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn1 = await mongoose.createConnection(process.env.MONGO_URI_USERS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const conn2 = await mongoose.createConnection(process.env.MONGO_URI_BOOKINGS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: UsersDB - ${conn1.client.s.url}, BookingsDB - ${conn2.client.s.url}`);

    return { conn1, conn2 };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
