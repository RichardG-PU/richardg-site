/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}",],
	theme: {
		extend: {
			colors: {
				'header-black': '#1e1e1e',
				'title': "#c8c8c8",
				'background': "#1a1a1a",
			},
		},
	},
	plugins: [],
}

