<script>
	import Circle from '$lib/Circle.svelte'
	import Rect from '$lib/Rect.svelte'
    import DeclutterSVG from '$lib/DeclutterSVG.svelte'
	
	let selected = DeclutterSVG 
</script>


<!-- <h1>Declutter</h1> -->
<svelte:component this={selected} />
<button on:click={()=> selected = DeclutterSVG}>
	Make it Declutter
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