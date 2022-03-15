<script lang="ts">
	import { primaryButton, secondaryButton } from '../styles/tailwindClasses';

	export let label: string;
	export let type: 'primary' | 'secondary' = 'primary';
	export let onClick: () => void;
</script>

<button on:click={onClick} class={type === 'primary' ? primaryButton : secondaryButton}
	>{label}</button
>
