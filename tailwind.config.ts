import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        modal: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)'
          },
          '60%': {
            opacity: '1',
            transform: 'translateY(-12px) scale(1)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        }
      },
      animation: {
        'modal': 'modal 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}

export default config 