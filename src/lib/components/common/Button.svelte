<script>
	export let type = 'button';
</script>

<button
	{type}
	on:click
	class="bg-slate-700 uppercase text-white p-2 shadow-md hover:bg-slate-600 focus:outline-none focus:ring focus:ring-opacity-30 focus:ring-slate-700 {$$props.class}"
>
	<slot />
</button>
