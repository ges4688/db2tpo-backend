import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    // Note: In a real application, we would hash the password,
    // but as per requirements, this is mocked
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema); 