import mongoose from "mongoose";

type MongoCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongo = globalThis as typeof globalThis & {
  __portfolioMongoCache?: MongoCache;
};

const cache = (globalForMongo.__portfolioMongoCache ??= {
  connection: null,
  promise: null,
});

/**
 * Returns one reusable Atlas connection per warm function instance. Do not call
 * disconnect() in a request handler: it defeats reuse and can exhaust Atlas.
 */
export async function connectMongo() {
  if (cache.connection) return cache.connection;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured");

  cache.promise ??= mongoose.connect(uri, {
    dbName: process.env.MONGODB_DB || undefined,
    maxPoolSize: Number(process.env.MONGODB_MAX_POOL_SIZE ?? 5),
    serverSelectionTimeoutMS: 5_000,
  });

  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.promise = null;
    throw error;
  }
}
