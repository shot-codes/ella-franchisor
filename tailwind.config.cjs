/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        base: colors.gray,
        primary: {
          50: "#f3f3f7",
          100: "#ececf3",
          200: "#dadae7",
          300: "#cacade",
          400: "#acacd2",
          500: "#8383c9",
          600: "#5252a3",
          700: "#343465",
          800: "#212135",
          900: "#14141f",
        },
        text: {
          dark: "#272a53",
          light: "#777bac",
          accent: "#ea786c",
        },
      }),
    },
  },
  plugins: [],
};
