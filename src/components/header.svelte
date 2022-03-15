<script lang="ts">
	import Moon from '../assets/moon.svelte';
	import Sun from '../assets/sun.svelte';
	export let dark: boolean;

	const headerContent = [
		{
			href: '/',
			name: 'Home'
		},
		{
			href: '/portfolio',
			name: 'Portfolio'
		},
		{
			href: '/projects',
			name: 'Projects'
		}
	];
</script>

<header class="px-8">
	<nav class="flex justify-end items-center">
		<ul class="flex">
			{#each headerContent as item}
				<li class="p-4">
					<a
						class="font-bold hover:text-green-500  dark:text-light dark:hover:text-primary"
						href={item.href}>{item.name}</a
					>
				</li>
			{/each}
		</ul>
		<div class="border-l-[1px] border-gray-400  h-6 rounded-md mx-3 dark:border-gray-600" />
		{#if dark}
			<button
				class="cursor-pointer stroke-dark dark:stroke-light dark:hover:stroke-primary"
				on:click={() => (dark = false)}
			>
				<svelte:component this={Moon} />
			</button>
		{:else}
			<button
				class="cursor-pointer stroke-dark dark:stroke-light hover:stroke-primary"
				on:click={() => (dark = true)}
			>
				<svelte:component this={Sun} class="cursor-pointer" />
			</button>
		{/if}
	</nav>
</header>
