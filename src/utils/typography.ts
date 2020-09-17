import Typography from "typography";
import ElkGlen from "typography-theme-elk-glen";

// import Wordpress2016 from "typography-theme-wordpress-2016";
// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   };
// };
// delete Wordpress2016.googleFonts;
// const typography = new Typography(Wordpress2016);

import elkGlenTheme from "typography-theme-elk-glen";

elkGlenTheme.overrideThemeStyles = (
  { adjustFontSizeTo, rhythm },
  options,
  styles
) => ({
  blockquote: {
    ...adjustFontSizeTo("20px"),
    fontStyle: "italic",
    paddingLeft: rhythm(13 / 16),
    marginLeft: rhythm(0),
  },
});

const typography = new Typography(elkGlenTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
