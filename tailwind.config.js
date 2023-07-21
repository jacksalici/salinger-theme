module.exports = {
  content: ["./hugo_stats.json"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Newsreader", "serif"],
      mono: ["Ubuntu Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        lit: {
          ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
        },
      },
      {
        dim: {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
        },
      },
    ],
    darkTheme: "dim",
  },
};
