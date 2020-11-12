module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    mode: "all",
    content: ["./src/**/*"],
    options: {
      whitelist: ["h1", "h2", "h3", "p", "blockquote", "strong" /* etc. */],
    },
  },
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
