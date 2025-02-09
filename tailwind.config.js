/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				body: '#0B0B0D',
				navText: '#949FA6',
				yellow: '#EAA879',
				darkOne: '#0B0B0D',
				darkTwo: '#0E0E10',
				darkThree: '#949FA6',
				darkFour: '#19191A',
				darkFive: '#141417'
			}
		}
	},
	plugins: [],
}

