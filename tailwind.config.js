module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    mode: "all",
    content: [
      "./src/**/*"
    ],
    options: {
      whitelist: ["h1", "h2", "h3", "p", "blockquote", "strong" /* etc. */],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
