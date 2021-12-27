<main class="wrapper">
	<h1 class="title">Work in progress</h1>
	<h2 class="subtitle">
		<a href="https://portfolio.yvijus.xyz/" target="_blank">Current portfolio website</a>
	</h2>
	<p class="caption">
		Currently building personal website using <a href="https://kit.svelte.dev/" target="_blank"
			>SvelteKit</a
		>
	</p>
</main>

<svelte:head>
	<style>
		*,
		*::after,
		*::before {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		body {
			background-color: #fff8f3;
		}
	</style>
</svelte:head>

<style lang="scss">
	.wrapper {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: get-rem(120px);
		margin-bottom: 25px;
		color: #000b49;
	}

	.subtitle {
		font-size: get-rem(60px);
		margin-bottom: 25px;
		a {
			color: #9b0000;
		}
	}

	.caption {
		font-size: get-rem(24px);
		font-weight: 700;

		a {
			color: #9b0000;
		}
	}
</style>
