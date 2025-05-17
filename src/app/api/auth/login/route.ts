import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';
import { setSession } from '@/lib/redis';
import { User } from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';

function generateMockJWT(userId: string): string {
  // Create a mock JWT with a simple structure
  const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({ userId, iat: Date.now() }));
  const signature = 'mock-signature';
  
  return `${header}.${payload}.${signature}`;
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Email and password are required'
      }, { status: 400 });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'User not found'
      }, { status: 401 });
    }

    // Check password (in a real app, we would hash and compare)
    if (user.password !== password) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Invalid credentials'
      }, { status: 401 });
    }

    // Generate mock JWT
    const jwt = generateMockJWT(user._id.toString());

    // Create session in Redis
    await setSession(user._id.toString(), {
      jwt,
      preferences: {
        theme: 'light',
        recentRecipes: []
      }
    });

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: {
        jwt,
        userId: user._id.toString()
      },
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Error in login:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error during login'
    }, { status: 500 });
  }
} 