<script lang="ts">
	import Moon from '../assets/moon.svelte';
	import Sun from '../assets/sun.svelte';
	import darkMode from '../stores/darkMode';

	export let dark: boolean;
</script>

{#if dark}
	<button
		class="cursor-pointer stroke-dark dark:stroke-light dark:hover:stroke-primary"
		on:click={() => {
			dark = false;
			darkMode.set('light');
		}}
	>
		<svelte:component this={Moon} />
	</button>
{:else}
	<button
		class="cursor-pointer stroke-dark dark:stroke-light hover:stroke-primary"
		on:click={() => {
			dark = true;
			darkMode.set('dark');
		}}
	>
		<svelte:component this={Sun} class="cursor-pointer" />
	</button>
{/if}
