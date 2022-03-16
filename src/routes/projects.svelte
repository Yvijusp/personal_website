<script lang="ts">
	import Button from '../components/button.svelte';
	import ProjectCard from '../components/projectCard.svelte';
	import { projects } from '../portfolio';
</script>

<section class="py-40 px-10 h-screen">
	<div class="grid grid-cols-2 gap-4 max-w-5xl m-auto">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>
