import { MongoClient } from 'mongodb';

const { VITE_MONGODB_URI, VITE_MONGODB_DB } = import.meta.env;

if (!VITE_MONGODB_URI) {
	throw new Error('Please define the VITE_MONGODB_URI environment variable inside .env.local');
}

if (!VITE_MONGODB_DB) {
	throw new Error('Please define the VITE_MONGODB_DB environment variable inside .env.local');
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
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true
		};

		cached.promise = MongoClient.connect(VITE_MONGODB_URI, opts).then((client) => {
			return {
				client,
				db: client.db(VITE_MONGODB_DB)
			};
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
}
