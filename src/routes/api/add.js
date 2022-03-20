import { connectToDatabase } from '$lib/database';

/**
 * Adds a new recipe.
 */
export async function post({ request }) {
	try {
		const { db } = await connectToDatabase();

		const recipe = await request.json();

		const { acknowledged, insertedId } = await db.collection('recipes').insertOne(recipe);

		if (!acknowledged) return { status: 500 };
		else return { status: 201, body: { insertedId, ...recipe } };
	} catch (error) {
		return { status: 500 };
	}
}
