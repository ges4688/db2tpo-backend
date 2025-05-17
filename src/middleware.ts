import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { corsMiddleware } from './middleware/cors';

export function middleware(request: NextRequest) {
  // Get CORS headers
  const corsHeaders = corsMiddleware(request);
  
  // If it's a preflight request, return the response from corsMiddleware
  if (request.method === 'OPTIONS') {
    return corsHeaders as NextResponse;
  }

  // For actual requests, add CORS headers to the response
  const response = NextResponse.next();
  
  // Add all CORS headers to the response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: '/api/:path*',
}; 