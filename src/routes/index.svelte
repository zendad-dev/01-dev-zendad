<script>
	import Circle from '$lib/Circle.svelte'
	import Rect from '$lib/Rect.svelte'
    import Metro from '$lib/Metro.svelte'
	
	let selected = Metro 
</script>


<h1>Welcome to Declutter</h1>
<svelte:component this={selected} />
<button on:click={()=> selected = Metro}>
	Make it Metro 
</button>

<button on:click={()=> selected = Rect}>
	Make it square
</button>
<button on:click={()=> selected = Circle}>
	Make it circle
</button>

<style>
	:global(svg) {
		max-width: 400px;
		display: block
	}
</style>