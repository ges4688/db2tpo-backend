import { NextResponse } from 'next/server';
import { User } from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';
import { ApiResponse } from '@/types/api';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { username, email, password } = body;

    // Validate required fields
    if (!username || !email || !password) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Missing required fields'
      }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'User with this email or username already exists'
      }, { status: 400 });
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password, // Note: In a real app, we would hash this
    });

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      },
      message: 'User created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error creating user'
    }, { status: 500 });
  }
} 