import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { connectToRedis } from '@/lib/redis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Mock authentication for now
    if (username === "test" && password === "test") {
      return NextResponse.json({ 
        returnCode: 200,
        message: "Login successful",
        data: { username }
      });
    }

    return NextResponse.json({ 
      returnCode: 401,
      message: "Invalid credentials",
      data: null
    }, { status: 401 });

  } catch (error) {
    return NextResponse.json({ 
      returnCode: 500,
      message: "Internal server error",
      data: null
    }, { status: 500 });
  }
} 