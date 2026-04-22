/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0284c7',
          dark: '#0369a1',
          light: '#e0f2fe',
        },
        secondary: '#0f172a',
        accent: '#f59e0b',
        success: '#10b981',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function({ addBase, addComponents, theme }) {
      addBase({
        'body': { 
          fontFamily: theme('fontFamily.sans').join(', '),
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          color: theme('colors.secondary'),
          backgroundColor: '#f8fafc', // slate-50/50 approx
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme('fontFamily.heading').join(', '),
          letterSpacing: '-0.025em',
        }
      });
      addComponents({
        '.glass-effect': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        '.nav-link-hover': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '0',
            height: '2px',
            width: '0',
            backgroundColor: theme('colors.primary.DEFAULT'),
            transition: 'all 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          }
        }
      });
    }),
  ],
}
