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
          DEFAULT: '#2563eb', // blue-600
          dark: '#1d4ed8',    // blue-700
          light: '#dbeafe',   // blue-100
        },
        secondary: '#0f172a', // slate-900
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
          color: '#0f172a',
          backgroundColor: '#f8fafc',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme('fontFamily.heading').join(', '),
          letterSpacing: '-0.025em',
        }
      });
      addComponents({
        '.glass-effect': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
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
            backgroundColor: '#2563eb',
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
