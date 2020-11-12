import React, { FC } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { scale, rhythm } from "../utils/typography";
import CustomLink from "./CustomLink";
import { Theme, useTheme } from "../context/theme-context";
const { BLOG_TITLE } = require("../assets/constants");

// Light up the headers below this section with this custom component
const Article = styled.section<{ theme: Theme }>`
  // color: initial;
`;

interface BlogPostLayoutProps {
  location: { pathname: string };
  title: string;
  className?: string;
}

const BlogPostLayout: FC<BlogPostLayoutProps> = (props) => {
  const { location, title = BLOG_TITLE, children, className = "" } = props;
  const { theme, toggleTheme } = useTheme();
  const rootPath = `lolazo`; //`${__PATH_PREFIX__}/`;
  let header;

  // Render layout depending on the route you are on
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <CustomLink
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </CustomLink>
      </h1>
    );
  } else {
    header = <></>;
  }

  const headerTextClass = theme === "dark" ? "text-gray-500" : "text-gray-700";
  const articleTextClass = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div id="layout-container" className={`mx-32${className}`}>
      <header className={`mb-3 ${headerTextClass}`}>
        <CustomLink to="/">{BLOG_TITLE}</CustomLink>
      </header>

      <main>
        <Article className={`prose ${theme} lg:prose-xl ${articleTextClass}`}>
          {children}
        </Article>
      </main>
    </div>
  );
};

export default BlogPostLayout;
