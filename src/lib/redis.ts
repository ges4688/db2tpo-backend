import Redis from 'ioredis';
import { SessionData } from '@/types/api';

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