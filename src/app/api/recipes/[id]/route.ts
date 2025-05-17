import { NextResponse } from 'next/server';
import { Recipe } from '@/models/Recipe';
import { connectToDatabase } from '@/lib/mongodb';
import { ApiResponse } from '@/types/api';
import { getAuthenticatedUserId, unauthorized } from '@/middleware/auth';
import { updateRecentRecipes } from '@/lib/redis';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = getAuthenticatedUserId(request);
    if (!userId) return unauthorized();
    
    //busqueda de receta por id siendo el id el _id unico autogenerado por mongo de la receta
    await connectToDatabase();
    const recipe = await Recipe.findById(params.id);

    if (!recipe) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Recipe not found'
      }, { status: 404 });
    }

    // Update recent recipes in Redis
    await updateRecentRecipes(userId, params.id);

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: recipe,
      message: 'Recipe found'
    });

  } catch (error) {
    console.error('Error fetching recipe:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error fetching recipe'
    }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = getAuthenticatedUserId(request);
    if (!userId) return unauthorized();

    await connectToDatabase();
    const body = await request.json();
    const { title, ingredients, instructions } = body;

    // Find recipe and check ownership
    const recipe = await Recipe.findById(params.id);
    if (!recipe) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Recipe not found'
      }, { status: 404 });
    }

    if (recipe.ownerId.toString() !== userId) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'FORBIDDEN',
        data: null,
        message: 'You can only update your own recipes'
      }, { status: 403 });
    }

    // Update recipe
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      params.id,
      { 
        $set: { 
          title: title || recipe.title,
          ingredients: ingredients || recipe.ingredients,
          instructions: instructions || recipe.instructions
        } 
      },
      { new: true }
    );

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: updatedRecipe,
      message: 'Recipe updated successfully'
    });

  } catch (error) {
    console.error('Error updating recipe:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error updating recipe'
    }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = getAuthenticatedUserId(request);
    if (!userId) return unauthorized();

    await connectToDatabase();

    // Find recipe and check ownership
    const recipe = await Recipe.findById(params.id);
    if (!recipe) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'Recipe not found'
      }, { status: 404 });
    }

    if (recipe.ownerId.toString() !== userId) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'FORBIDDEN',
        data: null,
        message: 'You can only delete your own recipes'
      }, { status: 403 });
    }

    await Recipe.findByIdAndDelete(params.id);

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: null,
      message: 'Recipe deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting recipe:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error deleting recipe'
    }, { status: 500 });
  }
} 