import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';

export function getAuthenticatedUserId(request: Request): string | null {
  const authHeader = request.headers.get('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  // In a real app, we would verify the JWT
  // For this mock version, we'll extract the userId from the token
  const token = authHeader.split(' ')[1];
  try {
    // Mock JWT parsing - in reality we would verify the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.userId;
  } catch {
    return null;
  }
}

export function unauthorized(): NextResponse<ApiResponse> {
  return NextResponse.json<ApiResponse>(
    {
      returnCode: 'UNAUTHORIZED',
      data: null,
      message: 'Unauthorized'
    },
    { status: 401 }
  );
} 