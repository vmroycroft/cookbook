<script>
	export let id;
	export let type = 'text';
	export let value = '';
</script>

<input {type} {id} name={id} {value} class="block w-full border-solid border-2 border-gray-300" />
