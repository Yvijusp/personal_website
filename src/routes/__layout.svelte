<script>
	import '../app.css';
	import Header from '../components/header.svelte';

	let dark = false;
</script>

<svelte:head>
	<title>Yvijus' Personal Website</title>
</svelte:head>

<div class:dark>
	<div class="bg-light dark:bg-dark h-screen">
		<Header bind:dark />
		<main class="px-8"><slot /></main>
	</div>
</div>
