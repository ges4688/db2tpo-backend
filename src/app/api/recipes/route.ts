import { NextResponse } from 'next/server';
import { Recipe } from '@/models/Recipe';
import { connectToDatabase } from '@/lib/mongodb';
import { ApiResponse } from '@/types/api';
import { getAuthenticatedUserId, unauthorized } from '@/middleware/auth';

export async function POST(request: Request) {
  try {
    const userId = getAuthenticatedUserId(request);
    if (!userId) return unauthorized();

    await connectToDatabase();
    const body = await request.json();
    const { title, ingredients, instructions } = body;

    // Validate required fields
    if (!title || !ingredients || !instructions) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Missing required fields'
      }, { status: 400 });
    }

    // Create new recipe
    const recipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      ownerId: userId
    });

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: recipe,
      message: 'Recipe created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating recipe:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error creating recipe'
    }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const userId = getAuthenticatedUserId(request);
    if (!userId) return unauthorized();

    await connectToDatabase();
    
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const ownerId = searchParams.get('ownerId');
    const title = searchParams.get('title');

    // Build query
    const query: any = {};
    if (ownerId) query.ownerId = ownerId;
    if (title) query.title = new RegExp(title, 'i');

    // Get recipes
    const recipes = await Recipe.find(query)
      .sort({ createdAt: -1 });

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: recipes,
      message: 'Recipes retrieved successfully'
    });

  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error fetching recipes'
    }, { status: 500 });
  }
} 