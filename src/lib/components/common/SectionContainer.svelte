<script>
	export let title;
	export let borderColor;
	export let textColor;
	export let backgroundColor;
</script>

<div class="lg:h-full p-4 mb-2 lg:mb-0 border-2 {borderColor}">
	<h1 class="text-3xl font-serif mb-4 {textColor}">
		<span class="{backgroundColor} text-white px-1">{title}</span>
		<span>a recipe</span>
	</h1>
	<slot />
</div>
