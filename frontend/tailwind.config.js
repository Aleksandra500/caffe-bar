/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				arizonia: ['"Arizonia"', 'cursive'],
				paprika: ['"Paprika"', 'system-ui'],
			},
		},
	},
	plugins: [],
};
