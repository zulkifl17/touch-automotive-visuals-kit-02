
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'eco-green': '#056330',
				'eco-leaf': '#88C43F',
				'eco-blue': '#0562AE',
				'eco-dark': '#000000',
				'eco-white': '#FFFFFF',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'eco': '0.75rem',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			letterSpacing: {
				'eco-wide': '0.1em',
				'eco-medium': '0.08em',
				'eco-small': '0.06em',
			},
			animation: {
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.3s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'pulse-eco': 'pulse-eco 6s ease-in-out infinite',
				'tilt': 'tilt 0.3s ease-out',
			},
			keyframes: {
				glow: {
					'0%': { boxShadow: '0 0 4px var(--eco-leaf)' },
					'100%': { boxShadow: '0 0 8px var(--eco-leaf), 0 0 12px var(--eco-leaf)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'pulse-eco': {
					'0%, 100%': { transform: 'scale(1)' },
					'3%': { transform: 'scale(1.05)' },
					'6%': { transform: 'scale(1)' }
				},
				'tilt': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(3deg)' }
				}
			},
			transitionTimingFunction: {
				'eco': 'cubic-bezier(.45,.05,.55,.95)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
