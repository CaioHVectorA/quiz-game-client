//@ts-nocheck
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        social: '#4682B4',      // Azul-ardósia
        math: '#ba2b2b',        // Rosa médio
        nature: '#7bd14d',     // Verde floresta
        others: '#8a2da6',      // Púrpura
      },
      keyframes : {
          slideLeft: {
            'from': { transform: 'translateX(-100px)', opacity: '0.2' },
            'to': { transform: 'translateX(0px)', opacity: '1' }
          },
          rotateGradient: {
            "0%": {
              backgroundImage: "linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
              backgroundPosition: "0% 50%",
              backgroundSize: "400% 400%"
            },
            '50%': {
              backgroundImage: "linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
              backgroundPosition: "100% 50%",
              backgroundSize: "400% 400%"
            },
            "100%": {
              backgroundImage: "linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
              // backgroundPosition: '200% 100%',
              backgroundSize: "400% 400%"
            },
          }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
