/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#A28CE0",
        primary: "#8c7ae6",
        primaryDark: "#7D64C3",
        lightGray: "#F5F5F5",
        mediumGray: "#D6D6D6",
        darkGray: "#A6A6A6",
      },
      fontSize: {
        small: "12px",
        medium: "14px",
        large: "16px",
        xLarge: "18px",
      },
      screens: {
        tablet: "1024px",
        desktop: "1600px",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
