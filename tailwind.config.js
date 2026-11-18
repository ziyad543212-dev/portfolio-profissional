/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0B1F3A',
        },
        electric: {
          blue: '#2563EB',
        },
        silver: {
          metallic: '#C0C7D1',
        },
        charcoal: {
          black: '#111318',
        },
        pure: {
          black: '#050505',
        },
        white: {
          pure: '#F5F7FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
