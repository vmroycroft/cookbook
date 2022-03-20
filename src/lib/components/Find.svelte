<script>
	import {fade, scale} from 'svelte/transition';

	import {RecipeStore} from '../../stores/recipes'
	import SectionContainer from '$lib/components/common/SectionContainer.svelte';

	const borderColor = 'border-red-400';
	const textColor = 'text-red-400';
	const backgroundColor = 'bg-red-400';
</script>

<SectionContainer title="Find" {borderColor} {textColor} {backgroundColor}>
	{#each $RecipeStore as recipe (recipe._id)}
		<div in:scale out:fade>{recipe._id} {recipe.name}</div>
	{:else}
		<p>No recipes</p>
	{/each}
</SectionContainer>
