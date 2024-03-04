/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8c7ae6",
      },
      fontSize: {
        small: "12px",
        medium: "14px",
        large: "16px",
        xLarge: "18px",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
