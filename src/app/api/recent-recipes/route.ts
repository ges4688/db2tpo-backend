import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api';
import { getSession } from '@/lib/redis';
import { getAuthenticatedUserId, unauthorized } from '@/middleware/auth';
import { Recipe } from '@/models/Recipe';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request: Request) {
  try {
    const userId = getAuthenticatedUserId(request);
    if (!userId) return unauthorized();

    // Get session from Redis
    const session = await getSession(userId);
    if (!session) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Session not found'
      }, { status: 404 });
    }

    // Get recipe IDs from session
    const recipeIds = session.preferences.recentRecipes;
    if (!recipeIds.length) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'SUCCESS',
        data: [],
        message: 'No recent recipes'
      });
    }

    // Get recipes from MongoDB
    await connectToDatabase();
    const recipes = await Recipe.find({
      _id: { $in: recipeIds }
    });

    // Sort recipes in the same order as recipeIds
    const sortedRecipes = recipeIds
      .map(id => recipes.find(recipe => recipe._id.toString() === id))
      .filter(recipe => recipe); // Remove any null values

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: sortedRecipes,
      message: 'Recent recipes retrieved'
    });

  } catch (error) {
    console.error('Error fetching recent recipes:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error fetching recent recipes'
    }, { status: 500 });
  }
} 