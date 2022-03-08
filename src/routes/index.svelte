<script>
	import Circle from '$lib/Circle.svelte'
	import Rect from '$lib/Rect.svelte'
    import ZendadSVG from '$lib/ZendadSVG.svelte'
	
	let selected = ZendadSVG 
</script>


<!-- <h1>Zendad</h1> -->
<svelte:component this={selected} />
<button on:click={()=> selected = ZendadSVG}>
	Make it Zendad 
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