import { NextResponse } from 'next/server';
import { getAuthenticatedUserId, unauthorized } from '@/middleware/auth';
import { getFavoriteRecipes, deleteSession } from '@/lib/redis';
import { connectToDatabase } from '@/lib/mongodb';
import { User } from '@/models/User';

export async function POST(request: Request) {
  const userId = getAuthenticatedUserId(request);
  if (!userId) return unauthorized();

  await connectToDatabase();

  // Recuperar favoritos de la sesión
  const favorites = await getFavoriteRecipes(userId);

  // Guardar los IDs de recetas favoritas en el usuario
  await User.findByIdAndUpdate(userId, {
    $set: { favoriteRecipes: favorites.map((r: any) => r._id) }
  });

  // Eliminar la sesión de Redis
  await deleteSession(userId);

  return NextResponse.json({ returnCode: 'SUCCESS', message: 'Logout exitoso y favoritos guardados.' });
}