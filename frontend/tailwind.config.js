/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				arizonia: ['"Arizonia"', 'cursive'],
				paprika: ['"Paprika"', 'system-ui'],
			},
			colors: {
				'coffee-brown': '#4B2E05',
			},
		},
	},
	plugins: [],
};
