module.exports = {
	mode: 'jit',
	content: [
		'./*.php',
		'./**/*.php'
	],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
	    require('@tailwindcss/typography'),
	],
}
