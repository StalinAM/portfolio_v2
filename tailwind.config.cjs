/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    gridTemplateColumns: {
      "box-xl": "repeat(auto-fill, minmax(300px, 1fr))",
      "box-x": "repeat(auto-fill, minmax(250px, 1fr))",
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        js: "#fbae17",
        dark: "#1c1c1c",
        "dark-light": "#222222",
        light: "#f5f5f5",
        css: "#0070ba",
      },
    },
  },
  plugins: [],
};
