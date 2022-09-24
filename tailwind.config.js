/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
			colors: {
				accent: 'red',
				text: '#dadada'
			},
			container: {
				center: true,
				padding: '20px'
			},
			screens: {
				'2xl': { max: "1540px" },
				'xl': { max: "1280px" },
				'lg': { max: "1024px" },
				'md': { max: "768px" },
				'sm': { max: "640px" }
			}
		},
  },
  plugins: [],
}
