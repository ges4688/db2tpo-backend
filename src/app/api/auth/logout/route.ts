import { NextResponse } from 'next/server';
import { getAuthenticatedUserId, unauthorized } from '@/middleware/auth';
import { deleteSession } from '@/lib/redis';
import { ApiResponse } from '@/types/api';

export async function POST(request: Request) {
  const userId = getAuthenticatedUserId(request);
  if (!userId) return unauthorized();
  await deleteSession(userId);
  return NextResponse.json<ApiResponse>({
    returnCode: 'SUCCESS',
    data: null,
    message: 'Session deleted'
  });
} 