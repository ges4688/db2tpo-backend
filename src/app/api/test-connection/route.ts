import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { connectToRedis, setCache, getCache } from '@/lib/redis';
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Test MongoDB connection
    try {
      const mongoConnection = await connectToDatabase();
      const mongoStatus = mongoose.connection.readyState === 1;
      
      return NextResponse.json({
        status: 'success',
        connections: {
          mongodb: {
            connected: mongoStatus,
            message: mongoStatus ? 'MongoDB connection successful' : 'MongoDB connection failed',
            state: mongoose.connection.readyState,
            stateText: ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState]
          },
          redis: {
            connected: true,
            message: 'Redis connection successful'
          }
        }
      });
    } catch (mongoError) {
      return NextResponse.json({
        status: 'error',
        connections: {
          mongodb: {
            connected: false,
            message: mongoError instanceof Error ? mongoError.message : 'MongoDB connection failed',
            error: mongoError
          },
          redis: {
            connected: true,
            message: 'Redis connection successful'
          }
        }
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      connections: {
        mongodb: { connected: false },
        redis: { connected: false }
      }
    }, { status: 500 });
  }
} 