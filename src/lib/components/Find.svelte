<script>
	import SectionContainer from '$lib/components/common/SectionContainer.svelte';

	export let recipes;

	const borderColor = 'border-red-400';
	const textColor = 'text-red-400';
	const backgroundColor = 'bg-red-400';
</script>

<SectionContainer title="Find" {borderColor} {textColor} {backgroundColor}>
	{#each recipes as recipe}
		<div>{recipe.id} {recipe.name}</div>
	{:else}
		<p>No recipes</p>
	{/each}
</SectionContainer>
