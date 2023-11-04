/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bg: "#0F172A",
      },
      colors: {
        "text-primary": "#ffffff",
        text: "#ffffff",
        "sub-head": "#96A0B4",
      },
    },
  },
  plugins: [],
};
