<script lang="ts">
	export let jobName: string = '';
	export let company: string = '';
	export let duration: string = '';
	export let description: string = '';
	export let descBullets: string[] = [];
</script>

<div
	class="dark:text-white w-96 p-4 shadow-lg dark:bg-gray-900/20 hover:shadow-hlg hover:transition-shadow duration-200 bg-white"
>
	<h2 class="text-center font-bold text-2xl mb-4">{jobName}</h2>
	{#if company}
		<h3 class="text-center font-bold text-xl text-primary mb-2">{company}</h3>
	{/if}
	<h4 class="text-center mb-2">{duration}</h4>
	<p>{description}</p>
	{#if descBullets.length > 0}
		<ol>
			{#each descBullets as bullet}
				<li>{bullet}</li>
			{/each}
		</ol>
	{/if}
</div>
