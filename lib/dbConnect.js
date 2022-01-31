/* eslint-disable require-jsdoc */
import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGO_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("👌 Using existing connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
      console.log("🔥 New DB Connection");
      return {
        client,
        db: client.db(MONGO_DB),
      };
    });
  }
  cached.conn = await cached.promise;
  console.log("🔥 Idk what this is");
  return cached.conn;
}
