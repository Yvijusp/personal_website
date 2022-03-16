<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import { page } from '$app/stores';
	import darkMode from '../stores/darkMode';
	import Footer from '../components/footer.svelte';

	$: dark = $darkMode !== 'light';
</script>

<svelte:head>
	<title>Yvijus' Personal Website</title>
</svelte:head>

<div class:dark>
	<div class="bg-light dark:bg-dark">
		<Header bind:dark home={$page.url.pathname} />
		<main class="px-8 "><slot /></main>
		<Footer home={$page.url.pathname} />
	</div>
</div>
