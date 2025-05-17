import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://db2:1234@db2tpo.u4ialfj.mongodb.net/?retryWrites=true&w=majority&appName=db2tpo';

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose;
    }

    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

    return mongoose;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}