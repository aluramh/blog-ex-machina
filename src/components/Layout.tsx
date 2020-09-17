import React, { FC, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { useTheme, ThemeProvider } from "../context/theme-context";

const LayoutContainer = ({ children }) => {
  return (
    <ThemeProvider>
      <TemplateWrapper>{children}</TemplateWrapper>
    </ThemeProvider>
  );
};

const TemplateWrapper: FC = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const { theme, toggleTheme } = useTheme();

  const themeClass = theme === "light" ? "bg-gray-100" : "bg-gray-800";

  return (
    <div className={`${themeClass}`} id="overallLayout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-3 pt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutContainer;