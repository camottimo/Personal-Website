/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      keyframes: {
        modal: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px) scale(0.97)'
          },
          '70%': {
            opacity: '1',
            transform: 'translateY(-8px) scale(1)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'modal': 'modal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in-1': 'fade-in-down 0.7s ease-out forwards',
        'fade-in-2': 'fade-in-down 0.7s ease-out 0.1s forwards',
        'fade-in-3': 'fade-in-down 0.7s ease-out 0.2s forwards',
        'fade-in-4': 'fade-in-down 0.7s ease-out 0.3s forwards',
        'fade-in-5': 'fade-in-down 0.7s ease-out 0.4s forwards'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  safelist: [
    'text-purple-800',
    'bg-purple-100',
    'text-green-800',
    'bg-green-100',
    'text-blue-800',
    'bg-blue-100',
    'opacity-0',
    'animate-fade-in-1',
    'animate-fade-in-2',
    'animate-fade-in-3',
    'animate-fade-in-4',
    'animate-fade-in-5'
  ]
} 