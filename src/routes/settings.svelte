<!-- src/routes/settings.svelte -->
<script lang='ts'>
import MtlGreen from '/static/images/Montreal_Metro_Logo-Green.svg';
import MtlBlue from '/static/Montreal_Metro_Logo.svg';
</script>



<img src="{MtlGreen}" alt="Montreal Metro Sign Green">
<img src="{MtlBlue}" alt="Montreal Metro Sign Blue">

<style>
	@font-face {
        font-family: 'Gelasio';
        font-style: normal;
        font-weight: 400;
        src: local('Gelasio Regular'), local('Gelasio-Regular'), url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
	:global(svg) {
		max-width: 400px;
		display: block;
		font-family: Gelasio
	}
</style>
<!--<img src={MtlBlue} alt="Montreal Metro Blue">
<img src={MtlGreen} alt="Montreal Metro Green">
 <h1>Settings</h1> -->
