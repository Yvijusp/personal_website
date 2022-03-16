<script lang="ts">
	import Github from 'svelte-material-icons/Github.svelte';
	import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
	import { linkButton } from '../styles/tailwindClasses';

	export let name: string;
	export let desc: string;
	export let github: string = '';
	export let link: string = '';
</script>

<div class="dark:text-white shadow-lg py-4 px-6 dark:bg-gray-900/20 rounded max-w-[450px]">
	<h2 class="text-3xl text-center mb-2">{name}</h2>
	<p class="text-base mb-4">{desc}</p>
	<div class="flex gap-3">
		{#if github}
			<a class={`${linkButton} bg-black text-white`} href={github}><Github /></a>
		{/if}
		{#if link}
			<a class={`${linkButton} bg-primary text-white  hover:bg-green-600`} href={link}
				><ArrowRight /> Demo</a
			>
		{/if}
	</div>
</div>
