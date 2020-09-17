import React, { FC } from "react";
import { scale, rhythm } from "../utils/typography";
import { Link } from "gatsby";
import CustomLink from "./CustomLink";

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

  return (
    <div
      id="layout-container"
      className={`${className}`}
      // style={{
      //   maxWidth: rhythm(24),
      //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      // }}
    >
      <header>{header}</header>
      <main>{children}</main>
    </div>
  );
};

export default BlogPostLayout;
