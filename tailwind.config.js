/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "sans-serif"],
      },
      // Add backface-visibility utility
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [],
  // Add custom utilities
  corePlugins: {
    // ... other core plugins
    backfaceVisibility: true,
  },
};
