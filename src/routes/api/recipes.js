import { connectToDatabase } from '$lib/database';

export async function get() {
	const { db } = await connectToDatabase();

	const recipes = await db.collection('recipes').find().toArray();

	if (recipes) {
		return {
			body: recipes,
		};
	}

	return {
		status: 404,
	};
}

/**
 * Adds a new recipe.
 */
export async function post({ request }) {
	const data = await request.json();
	console.log(data);

	return {
		status: 200,
	};
}
