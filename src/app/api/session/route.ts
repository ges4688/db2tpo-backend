import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';
import { getSession } from '@/lib/redis';
import { getAuthenticatedUserId, unauthorized } from '@/middleware/auth';

export async function GET(request: Request) {
  try {
    const userId = getAuthenticatedUserId(request);
    if (!userId) return unauthorized();

    const session = await getSession(userId);
    if (!session) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Session not found'
      }, { status: 404 });
    }

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: {
        userId,
        preferences: session.preferences
      },
      message: 'Session retrieved'
    });

  } catch (error) {
    console.error('Error fetching session:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error fetching session'
    }, { status: 500 });
  }
} 