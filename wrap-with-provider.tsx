/**
 * Wrap the root of the application with the ThemeProvider so we have access to the the theme context everywhere.
 * Also import the global CSS file.
 *
 * This file's logic is used in by gatsby-ssr and gatsby-browser since both files have to have the same logic.
 * Read more about this here: https://www.gatsbyjs.com/docs/browser-apis/#wrapRootElement
 */

import React, { FC, useEffect } from "react";
import { ThemeProvider } from "./src/context/theme-context";

const WrappedComponent: FC<any> = (props) => {
  const { element } = props;

  return <ThemeProvider>{element}</ThemeProvider>;
};

export default WrappedComponent;
