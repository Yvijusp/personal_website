import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

const sassPath = `./src/styles/`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import '${sassPath}';`
		}
	}),

	kit: {
		adapter: adapter()

		// hydrate the <div id="svelte"> element in src/app.html
	}
};

export default config;
