const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			gray: colors.slate,
			green: colors.emerald,
			purple: colors.violet,
			yellow: colors.amber,
			pink: colors.fuchsia,
			dark: '#313552',
			secondary: '#B8405E',
			primary: '#2EB086',
			light: '#EEE6CE'
		}
	},
	plugins: []
};
