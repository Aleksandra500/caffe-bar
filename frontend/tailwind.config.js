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
				'coffee-brown': '#4E342E',
				coffee: '#1c1b18',
				latte: '#f4e3c1',
				crema: '#d2c7b3',
				espresso: '#4E342E',
			},
		},
	},
	plugins: [],
};
