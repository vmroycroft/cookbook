<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const url = '/api/find';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					recipes: await res.json(),
				},
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		};
	}
</script>

<script>
	import {RecipeStore} from '../stores/recipes';
	import Find from '$lib/components/Find.svelte';
	import View from '$lib/components/View.svelte';
	import Add from '$lib/components/Add.svelte';

	export let recipes;

	RecipeStore.set(recipes);
</script>

<svelte:head>
	<title>Family Cookbook</title>
</svelte:head>

<section class="h-screen p-2 gap-2 columns-1 lg:columns-3">
	<Find />
	<View />
	<Add />
</section>

<style>
</style>
