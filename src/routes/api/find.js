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
