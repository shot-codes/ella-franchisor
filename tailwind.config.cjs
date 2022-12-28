/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        base: colors.gray,
        base_dark: {
          ...colors.zinc,
          850: "#202023",
        },
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
          major: "#2E315B",
          minor: "#7e7e9a",
          accent: "#ee9187",
        },
        text_dark: {
          major: "#c0c0c6",
          minor: "#81818d",
          accent: "#f4bab3",
        },
      }),
      fontFamily: {
        rubik: ["rubik"],
        rubikheavy: ["rubikheavy"],
      },
    },
  },
  plugins: [],
};
