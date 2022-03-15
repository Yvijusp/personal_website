const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			boxShadow: {
				lg: '0 1px 3px 1px rgba(0,0,0,0.3)'
			}
		},
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
			sky: colors.sky,
			dark: '#313552',
			secondary: '#B8405E',
			primary: '#2EB086',
			light: '#ffffff'
		},
		fontFamily: {
			sans: ['Space Grotesk', 'sans-serif']
		}
	},
	plugins: []
};
