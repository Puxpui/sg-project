/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Paths to all template files
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ['Itim', 'cursive'],
      },
      fontSize: {
        xxxs: '10px', // Custom font size
      },
      width: {
        '192': '48rem', // Custom width
      },
      rotate: {
        '120': '120deg', // Custom rotation
      }
    },
  },
  plugins: [
    require('daisyui'), // DaisyUI plugin
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9ef88d",
          "secondary": "#4b5563",
          "accent": "#1c7ed6",
          "neutral": "#f5f5f5",
          "base-100": "#ffffff",
          "grey": "#e8e9e8"
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}
