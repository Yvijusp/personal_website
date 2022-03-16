<script lang="ts">
	import EducationCard from '../components/educationCard.svelte';
	import { education, icons, skills } from '../portfolio';
	import {
		defaultIcon,
		githubClass,
		linkedinClass,
		portfolioSection,
		skillClass
	} from '../styles/tailwindClasses';
</script>

<section class={portfolioSection}>
	<div>
		<h2 class="text-5xl text-center mb-6 dark:text-white">About me</h2>
		<div>
			<p class="max-w-md text-lg dark:text-white">
				I'm a full stack developer currently working at <a
					class="text-secondary font-bold"
					href="https://www.devbridge.com/">Devbridge</a
				>. I like to create dynamic websites, secure and fast APIs.
			</p>
			<div class="flex gap-4 mt-4">
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
		</div>
	</div>
</section>

<section class={portfolioSection}>
	<div>
		<h2 class="text-5xl text-center mb-6 dark:text-white">Technologies I use</h2>
		<div class="flex gap-3 max-w-lg flex-wrap justify-center">
			{#each skills as skill}
				<div class="{skillClass} {skill.class} shadow-md hover:scale-110" title={skill.title}>
					<svelte:component this={skill.icon} />
				</div>
			{/each}
		</div>
	</div>
</section>

<section class={portfolioSection}>
	<div>
		<h2 class="text-5xl text-center mb-10 dark:text-white">Education</h2>
		<div class="flex gap-10 flex-col lg:flex-row lg:gap-6">
			{#each education as { schoolName, subHeader, duration, desc }}
				<EducationCard {schoolName} {subHeader} {duration} {desc} />
			{/each}
		</div>
	</div>
</section>
