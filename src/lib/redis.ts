import Redis from 'ioredis';
import { SessionData, IRecipe } from '@/types/api';
import { Recipe } from '@/models/Recipe';
import { connectToDatabase } from '@/lib/mongodb';

const redis = new Redis('rediss://default:ATlUAAIjcDFiMWQzOTI4ZmZkMDY0NDM2OWQwYjRiNGYzYTYzNmE1Y3AxMA@good-asp-14676.upstash.io:6379');

const SESSION_TTL = 30 * 24 * 60 * 60; // 30 days in seconds

export async function getSession(userId: string): Promise<SessionData | null> {
  const sessionKey = `session:${userId}`;
  const data = await redis.get(sessionKey);
  return data ? JSON.parse(data) : null;
}

export async function setSession(userId: string, data: SessionData): Promise<void> {
  const sessionKey = `session:${userId}`;
  await redis.set(sessionKey, JSON.stringify(data), 'EX', SESSION_TTL);
}

export async function updateRecentRecipes(userId: string, recipeId: string): Promise<void> {
  const sessionKey = `session:${userId}`;
  const session = await getSession(userId);
  
  if (session) {
    const recentRecipes = new Set([recipeId, ...session.preferences.recentRecipes]);
    session.preferences.recentRecipes = Array.from(recentRecipes).slice(0, 5); // Keep only last 5
    await setSession(userId, session);
  }
}

export async function deleteSession(userId: string): Promise<void> {
  const sessionKey = `session:${userId}`;
  await redis.del(sessionKey);
}

export async function connectToRedis() {
  return redis;
}

export async function setCache(key: string, value: any, expirationInSeconds?: number) {
  if (expirationInSeconds) {
    await redis.set(key, JSON.stringify(value), 'EX', expirationInSeconds);
  } else {
    await redis.set(key, JSON.stringify(value));
  }
}

export async function getCache(key: string) {
  const value = await redis.get(key);
  return value ? JSON.parse(value) : null;
}

export async function deleteCache(key: string) {
  await redis.del(key);
}

export async function getFavoriteRecipes(userId: string) {
  const session = await getSession(userId);
  return session?.preferences.favoriteRecipes || [];
}

export async function toggleFavoriteRecipe(userId: string, recipeId: string) {
  const session = await getSession(userId);
  if (!session) return [];
  await connectToDatabase();
  const recipe = await Recipe.findById(recipeId);
  if (!recipe) return session.preferences.favoriteRecipes;
  const recipeData = {
    _id: recipe._id.toString(),
    title: recipe.title,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    ownerId: recipe.ownerId.toString(),
    createdAt: recipe.createdAt
  };
  if (!session.preferences.favoriteRecipes) session.preferences.favoriteRecipes = [];
  const exists = session.preferences.favoriteRecipes.some(r => r._id === recipeId);
  if (exists) {
    session.preferences.favoriteRecipes = session.preferences.favoriteRecipes.filter(r => r._id !== recipeId);
  } else {
    session.preferences.favoriteRecipes = [recipeData, ...session.preferences.favoriteRecipes];
  }
  await setSession(userId, session);
  return session.preferences.favoriteRecipes;
}

export async function updateRecipeInAllSessions(recipe: IRecipe) {
  const keys = await redis.keys('session:*');
  for (const key of keys) {
    const data = await redis.get(key);
    if (!data) continue;
    const session = JSON.parse(data);
    let updated = false;
    if (session.preferences.favoriteRecipes) {
      session.preferences.favoriteRecipes = session.preferences.favoriteRecipes.map((r: IRecipe) =>
        r._id === recipe._id ? recipe : r
      );
      updated = true;
    }
    if (session.preferences.recentRecipes) {
      session.preferences.recentRecipes = session.preferences.recentRecipes.map((r: IRecipe) =>
        r._id === recipe._id ? recipe : r
      );
      updated = true;
    }
    if (updated) {
      await redis.set(key, JSON.stringify(session), 'EX', SESSION_TTL);
    }
  }
}

export async function removeRecipeFromAllSessions(recipeId: string) {
  const keys = await redis.keys('session:*');
  for (const key of keys) {
    const data = await redis.get(key);
    if (!data) continue;
    const session = JSON.parse(data);
    let updated = false;
    if (session.preferences.favoriteRecipes) {
      const before = session.preferences.favoriteRecipes.length;
      session.preferences.favoriteRecipes = session.preferences.favoriteRecipes.filter((r: IRecipe) => r._id !== recipeId);
      if (session.preferences.favoriteRecipes.length !== before) updated = true;
    }
    if (session.preferences.recentRecipes) {
      const before = session.preferences.recentRecipes.length;
      session.preferences.recentRecipes = session.preferences.recentRecipes.filter((r: IRecipe) => r._id !== recipeId);
      if (session.preferences.recentRecipes.length !== before) updated = true;
    }
    if (updated) {
      await redis.set(key, JSON.stringify(session), 'EX', SESSION_TTL);
    }
  }
} 