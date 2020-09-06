import React from "react";
import { Link } from "gatsby";
import { useTheme, ThemeProvider } from "../context/theme-context";

const CustomLink = (props) => {
  const { theme } = useTheme();

  const customStyle = theme === "dark" ? { textShadow: "none" } : {};

  return (
    <Link style={customStyle} {...props}>
      {props.children}
    </Link>
  );
};

export default CustomLink;
