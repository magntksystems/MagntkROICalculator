/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#131418',
          light: '#1c1d24',
        },
        accent: {
          cyan: '#05d9fc',
          purple: '#8f86eb',
        },
        gray: {
          750: '#2a2b31',
          850: '#1f2027',
        }
      },
      fontFamily: {
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'bold': '700',
        'extrabold': '800',
      }
    },
  },
  plugins: [],
};