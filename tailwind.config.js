module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.php',
		'./template-parts/**/*.php',
		'./*.php',
		'./inc/**/*.php',
		'./inc/*.php',
		'./src/**/*.js',
	],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
	    require('@tailwindcss/typography'),
	],
}
