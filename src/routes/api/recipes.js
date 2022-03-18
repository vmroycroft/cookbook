/**
 * Adds a new recipe.
 */
export async function post({ request }) {
	const data = await request.json();
	console.log(data);
	
	return {
		status: 200
	};
}