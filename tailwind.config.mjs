/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Star Wars Color Palette - Workshop Theme
				'imperial-red': '#8B0000',
				'imperial-red-light': '#A00000',
				'imperial-red-dark': '#5A0000',
				'jedi-blue': '#4A9EFF',
				'jedi-blue-light': '#6BB5FF',
				'jedi-blue-dark': '#2A7EDF',
				'scrap-grey': '#3A3A3A',
				'scrap-grey-light': '#4A4A4A',
				'scrap-grey-dark': '#2A2A2A',
				'workshop-orange': '#FF8C00',
				'workshop-orange-light': '#FFA500',
				'workshop-orange-dark': '#FF6B35',
				'workshop-amber': '#D4A574',
				'workshop-amber-light': '#E5B887',
				'workshop-amber-dark': '#B8955A',
				'workshop-brown': '#8B4513',
				'workshop-brown-light': '#A0522D',
				'workshop-brown-dark': '#654321',
				'kyber-crystal': '#00FFFF',
				'kyber-crystal-light': '#33FFFF',
				'kyber-crystal-dark': '#00CCCC',
				'holo-blue': '#00D9FF',
				'holo-blue-light': '#33E5FF',
				'holo-blue-dark': '#00B8D9',
				'beskar-silver': '#C0C0C0',
				'beskar-silver-light': '#E0E0E0',
				'beskar-silver-dark': '#A0A0A0',
			},
			fontFamily: {
				'aurebesh': ['Aurebesh', 'sans-serif'],
			},
			animation: {
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'flicker': 'flicker 0.15s infinite',
				'saber-ignite': 'saber-ignite 0.5s ease-out',
			},
			keyframes: {
				'glow-pulse': {
					'0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px currentColor)' },
					'50%': { opacity: '0.7', filter: 'drop-shadow(0 0 16px currentColor)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'saber-ignite': {
					'0%': { width: '0%', opacity: '0' },
					'100%': { width: '100%', opacity: '1' },
				},
			},
			backgroundImage: {
				'workshop-texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
			},
		},
	},
	plugins: [],
};

