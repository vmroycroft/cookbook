<script>
	export let id;
</script>

<div class="inline-block mr-4">
	<input type="checkbox" {id} name={id} />
	<label for={id}><slot /></label>
</div>
