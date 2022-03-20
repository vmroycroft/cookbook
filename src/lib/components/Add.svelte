<script>
	import {RecipeStore} from '../../stores/recipes'

	import SectionContainer from './common/SectionContainer.svelte';
	import FormGroup from './common/FormGroup.svelte';
	import FormLabel from './common/FormLabel.svelte';
	import FormInput from './common/FormInput.svelte';
	import FormTextarea from './common/FormTextarea.svelte';
	import FormCheckbox from './common/FormCheckbox.svelte';
	import FormError from './common/FormError.svelte';
	import Button from './common/Button.svelte';

	const borderColor = 'border-yellow-500';
	const textColor = 'text-yellow-500';
	const backgroundColor = 'bg-yellow-500';

	const errors = { name: false, author: false, categories: false, ingredients: false, directions: false };

	// TODO Get categories from backend
	const categories = ['Chicken', 'Beef', 'Pasta', 'Dessert', 'Salad', 'Side', 'Sandwich', 'Soup'];

	// function addCategory() {
	// 	console.log('add category');
	// }

	async function onSubmit(e) {
		const formData = new FormData(e.target);
		const newRecipe = Object.fromEntries(formData.entries());
		newRecipe.categories = formData.getAll('categories');

		if (isFormValid(newRecipe)) {
			const response = await fetch('/api/add', {
				method: 'POST',
				body: JSON.stringify(newRecipe),
			});

			const data = await response.json();

			RecipeStore.update((recipes) => [data, ...recipes]);
		}
	}

	function isFormValid(data) {
		// TODO Make this more generic
		let isValid = true;

		if (data.name === '') {
			errors.name = true;
			isValid = false;
		} else errors.name = false;

		if (data.author === '') {
			errors.author = true;
			isValid = false;
		} else errors.author = false;

		if (data.categories.length < 1) {
			errors.categories = true;
			isValid = false;
		} else errors.categories = false;

		if (data.ingredients === '') {
			errors.ingredients = true;
			isValid = false;
		} else errors.ingredients = false;

		if (data.directions === '') {
			errors.directions = true;
			isValid = false;
		} else errors.directions = false;

		return isValid;
	}
</script>

<SectionContainer title="Add" {borderColor} {textColor} {backgroundColor}>
	<form on:submit|preventDefault={onSubmit}>
		<!-- Name -->
		<FormGroup>
			<FormLabel {textColor}><label for="name">Name</label></FormLabel>
			<FormInput id="name" />
			{#if errors.name}<FormError message="Please fill in the recipe name." />{/if}
		</FormGroup>

		<!-- Author -->
		<FormGroup>
			<FormLabel {textColor}><label for="author">Author</label></FormLabel>
			<FormInput id="author" />
			{#if errors.author}<FormError message="Please fill in the recipe author." />{/if}
		</FormGroup>

		<!-- Category -->
		<FormGroup>
			<FormLabel {textColor}>Category</FormLabel>
			{#each categories as category}
				<FormCheckbox id={category} name="categories">{category}</FormCheckbox>
			{/each}
			<!-- <Button on:click={addCategory} class="text-xs">Add Category</Button> -->
			{#if errors.categories}<FormError message="Please select at least one category." />{/if}
		</FormGroup>

		<!-- Ingredients -->
		<FormGroup>
			<FormLabel {textColor}><label for="ingredients">Ingredients</label></FormLabel>
			<FormTextarea id="ingredients" />
			{#if errors.ingredients}<FormError message="Please fill in the ingredients." />{/if}
		</FormGroup>

		<!-- Directions -->
		<FormGroup>
			<FormLabel {textColor}><label for="directions">Directions</label></FormLabel>
			<FormTextarea id="directions" />
			{#if errors.directions}<FormError message="Please fill in the directions." />{/if}
		</FormGroup>
		<Button type="submit">Add Recipe</Button>
	</form>
</SectionContainer>
