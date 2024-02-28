/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8c7ae6",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
