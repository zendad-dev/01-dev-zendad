<!-- src/routes/settings.svelte -->
<script lang='ts'>
import MtlGreen from '/static/images/Montreal_Metro_Logo-Green.svg';
import MtlBlue from '/static/Montreal_Metro_Logo.svg';
</script>



<img src="{MtlGreen}" alt="Montreal Metro Sign Green">
<img src="{MtlBlue}" alt="Montreal Metro Sign Blue">

<style>
	:global(svg) {
		max-width: 400px;
		display: block
	}
</style>
<!--<img src={MtlBlue} alt="Montreal Metro Blue">
<img src={MtlGreen} alt="Montreal Metro Green">
 <h1>Settings</h1> -->
