import { NextResponse } from 'next/server';
import { getAuthenticatedUserId, unauthorized } from '@/middleware/auth';
import { getFavoriteRecipes, toggleFavoriteRecipe } from '@/lib/redis';
import { ApiResponse } from '@/types/api';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request: Request) {
  const userId = getAuthenticatedUserId(request);
  if (!userId) return unauthorized();
  await connectToDatabase();
  const favorites = await getFavoriteRecipes(userId);
  return NextResponse.json<ApiResponse>({
    returnCode: 'SUCCESS',
    data: favorites,
    message: 'Favorite recipes retrieved'
  });
}

export async function POST(request: Request) {
  const userId = getAuthenticatedUserId(request);
  if (!userId) return unauthorized();
  await connectToDatabase();
  const { recipeId } = await request.json();
  const updatedFavorites = await toggleFavoriteRecipe(userId, recipeId);
  return NextResponse.json<ApiResponse>({
    returnCode: 'SUCCESS',
    data: updatedFavorites,
    message: 'Favorite recipes updated'
  });
} 