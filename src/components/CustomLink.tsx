import React, { CSSProperties, FC, useMemo } from "react";
import { Link } from "gatsby";
import { useTheme, ThemeProvider } from "../context/theme-context";

type Props = any;

const CustomLink: FC<Props> = (props) => {
  const { theme } = useTheme();

  const customStyle = useMemo(() => {
    let style: CSSProperties = { backgroundImage: "none" };

    if (theme === "dark") {
      style.textShadow = "none";
    }

    return style;
  }, [theme]);

  return (
    <Link style={customStyle} {...props}>
      {props.children}
    </Link>
  );
};

export default CustomLink;
