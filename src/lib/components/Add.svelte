<script>
	import SectionContainer from './common/SectionContainer.svelte';
	import FormGroup from './common/FormGroup.svelte';
	import FormLabel from './common/FormLabel.svelte';
	import FormInput from './common/FormInput.svelte';
	import FormTextarea from './common/FormTextarea.svelte';
	import FormCheckbox from './common/FormCheckbox.svelte';
	import Button from './common/Button.svelte';

	const borderColor = 'border-yellow-500';
	const textColor = 'text-yellow-500';
	const backgroundColor = 'bg-yellow-500';

	// TODO Get categories from backend
	const categories = ['Chicken', 'Beef', 'Pasta', 'Dessert', 'Salad', 'Side', 'Sandwhich', 'Soup'];

	function addCategory() {
		console.log('add category');
	}

	function onSubmit(e) {
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	}
</script>

<SectionContainer title="Add" {borderColor} {textColor} {backgroundColor}>
	<form on:submit|preventDefault={onSubmit}>
		<FormGroup>
			<FormLabel {textColor}><label for="name">Name</label></FormLabel>
			<FormInput id="name" />
		</FormGroup>
		<FormGroup>
			<FormLabel {textColor}><label for="author">Author</label></FormLabel>
			<FormInput id="author" />
		</FormGroup>
		<FormGroup>
			<FormLabel {textColor}>Category</FormLabel>
			{#each categories as category}
				<FormCheckbox id={category}>{category}</FormCheckbox>
			{/each}
			<Button on:click={addCategory} class="text-xs">Add Category</Button>
		</FormGroup>
		<FormGroup>
			<FormLabel {textColor}><label for="ingredients">Ingredients</label></FormLabel>
			<FormTextarea id="ingredients" />
		</FormGroup>
		<FormGroup>
			<FormLabel {textColor}><label for="directions">Directions</label></FormLabel>
			<FormTextarea id="directions" />
		</FormGroup>
		<Button type="submit">Add Recipe</Button>
	</form>
</SectionContainer>
