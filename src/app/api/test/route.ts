import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectToDatabase();
    
    return NextResponse.json({ 
      returnCode: 200,
      message: "Successfully connected to MongoDB",
      data: {
        connection: true,
        databases: Object.keys(mongoose.models)
      }
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json({ 
      returnCode: 500,
      message: "Failed to connect to MongoDB",
      data: {
        connection: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }, { status: 500 });
  }
} 