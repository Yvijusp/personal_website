<script lang="ts">
	export let schoolName: string;
	export let subHeader: string;
	export let duration: string;
	export let desc: string;
</script>

<div
	class="dark:text-white rounded hover:scale-105 hover:transition-transform py-5 px-10 shadow-lg dark:bg-gray-900/20 lg:w-[28rem] min-w-[18rem]"
>
	<h3 class="text-primary font-bold text-2xl mb-2">{schoolName}</h3>
	<h4 class="font-bold text-lg mb-3">{subHeader}</h4>
	<span class="rounded bg-primary p-1 text-xs text-white">{duration}</span>
	<p class="mt-2 text-gray-900 dark:text-white">{desc}</p>
</div>
