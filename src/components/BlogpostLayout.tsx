import React, { FC } from "react";
import { scale, rhythm } from "../utils/typography";
import { Link } from "gatsby";
import CustomLink from "./CustomLink";
import { useTheme } from "../context/theme-context";

interface BlogPostLayoutProps {
  location: { pathname: string };
  title: string;
  className?: string;
}

const BlogPostLayout: FC<BlogPostLayoutProps> = (props) => {
  const {
    location,
    title = "My blog about whatever",
    children,
    className = "",
  } = props;
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

  const headerClass = theme === "dark" ? "text-gray-400" : "text-gray-800";

  return (
    <div
      id="layout-container"
      className={`mx-32${className}`}
      // style={{
      //   maxWidth: rhythm(24),
      //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      // }}
    >
      <header className={`${headerClass}`}>{header}</header>

      <main>
        <article className="prose lg:prose-xl">{children}</article>
      </main>
    </div>
  );
};

export default BlogPostLayout;
