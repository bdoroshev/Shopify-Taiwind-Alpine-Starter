/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
			colors: {
				accent: '#008060',
				textColor: '#1d1d1d'
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
			},
			animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
		},
  },
  plugins: [],
}
