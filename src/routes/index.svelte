<script context="module">
	export const prerender = true;
</script>

<script>
	import Find from '../components/Find.svelte';
	import View from '../components/View.svelte';
	import Add from '../components/Add.svelte';
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
