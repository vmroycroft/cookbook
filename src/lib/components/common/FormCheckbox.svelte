<script>
	export let id;
	export let name;
</script>

<div class="inline-block mr-4">
	<input type="checkbox" {id} {name} value={id} />
	<label for={id}><slot /></label>
</div>
