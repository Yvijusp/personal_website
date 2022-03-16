<script lang="ts">
	export let home: string;
	import { icons } from '../portfolio';
	import { defaultIcon, githubClass, linkedinClass } from '../styles/tailwindClasses';
</script>

{#if home !== '/'}
	<footer class="mt-20 dark:bg-gray-900/20 p-5 flex flex-col items-center">
		<div class="flex gap-4 mb-4">
			{#each icons as icon}
				<a
					href={icon.link}
					title={icon.title}
					class="text-2xl rounded-full p-1.5 {icon.title === 'Linkedin'
						? linkedinClass
						: icon.title === 'Github'
						? githubClass
						: defaultIcon}"><svelte:component this={icon.icon} /></a
				>
			{/each}
		</div>
		<span class="dark:text-white uppercase">Yvijus Padolskis</span>
	</footer>
{/if}
