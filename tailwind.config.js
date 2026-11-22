module.exports = {
  content: ["./hugo_stats.json"],
  darkMode: ['class'],
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
    // Keep false: Hugo reads the CSS from PostCSS stdout, and the daisyUI
    // banner would end up inside the generated stylesheet.
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
