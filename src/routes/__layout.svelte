<script>
	import '../app.css';
	import Header from '../components/header.svelte';

	let dark = true;
</script>

<svelte:head>
	<title>Yvijus' Personal Website</title>
</svelte:head>

<div class:dark>
	<div class="bg-light dark:bg-dark">
		<Header bind:dark />
		<slot />
	</div>
</div>
