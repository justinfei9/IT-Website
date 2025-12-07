/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Specify where Tailwind should look for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 2. Custom Keyframes for the Hero gradient animation
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      // 3. Define the custom font if you use one (optional)
      fontFamily: {
        // e.g., 'sans': ['Inter', 'sans-serif'],
      },
      // 4. Customize colors (optional, but good practice for consistency)
      colors: {
        'slate': {
          900: '#0f172a',
          800: '#1e293b',
          // ... and so on
        },
      },
    },
  },
  plugins: [],
}