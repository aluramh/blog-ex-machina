/**
 * Wrap the root of the application with the ThemeProvider so we have access to the the theme context everywhere.
 * Also import the global CSS file.
 *
 * This file's logic is used in by gatsby-ssr and gatsby-browser since both files have to have the same logic.
 * Read more about this here: https://www.gatsbyjs.com/docs/browser-apis/#wrapRootElement
 */

import React, { FC, useEffect } from "react";
import { ThemeProvider, useTheme } from "./src/context/theme-context";
import useHasMounted from "./src/hooks/useHasMounted";

/**
 * This Component is just a naive way of solving the SSR hydration issues by
 * basically not rendering on the server-side. This means everything is rendered
 * client-side and there is no speed improvement, so this needs to be fixed.
 * TODO: - Fix this hydration issue...
 * @param props
 */
const DelayComponent: FC = (props) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return <>{props.children}</>;
};

const WrappedComponent: FC<any> = (props) => {
  const { element } = props;

  return (
    <ThemeProvider>
      <DelayComponent>{element}</DelayComponent>
    </ThemeProvider>
  );
};

export default WrappedComponent;
