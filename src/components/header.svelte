<script lang="ts">
	import DarkModeSwitch from './darkModeSwitch.svelte';
	export let dark: boolean;
	export let home: string;

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

{#if home !== '/'}
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
			<DarkModeSwitch bind:dark />
		</nav>
	</header>
{:else}
	<div class="absolute top-4 right-8"><DarkModeSwitch bind:dark /></div>
{/if}
