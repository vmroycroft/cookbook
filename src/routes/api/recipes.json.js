import { connectToDatabase } from '$lib/db';

const { db } = await connectToDatabase();

export async function get() {
	const recipes = await db.collection('recipes').find().toArray();

	if (recipes) {
		return {
			body: recipes
		};
	}

	return {
		status: 404
	};
}