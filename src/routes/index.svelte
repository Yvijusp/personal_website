<script>
	import Button from '../components/button.svelte';
	import { Circle } from '../styles/tailwindClasses';
	import { goto } from '$app/navigation';
</script>

<section class="flex flex-col gap-10 justify-center items-center h-screen">
	<div class={Circle}>
		<h1
			class="2xl:text-7xl lg:text-6xl text-4xl relative z-10 pointer-events-none dark:text-white select-none"
		>
			Hello. I'm <span class="text-primary font-bold"> Yvijus Padolskis.</span>
			<br /> I'm full stack developer web developer.
		</h1>
	</div>
	<div class="flex gap-4">
		<Button onClick={() => goto('/portfolio')} label="View my portfolio" />
		<Button onClick={() => goto('/projects')} type="secondary" label="View my projects" />
	</div>
</section>
