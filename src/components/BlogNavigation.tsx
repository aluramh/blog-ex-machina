import React, { FC } from "react";
import CustomLink from "./CustomLink";

interface Props {
  previous?: any;
  next?: any;
}

const BlogNavigation: FC<Props> = (props) => {
  const { previous, next } = props;

  console.log({ previous, next });

  return (
    <nav>
      {previous && next && (
        <ul className="flex flex-wrap justify-between">
          <li>
            {previous && (
              <CustomLink to={previous.fields.slug} rel="prev">
                ← Prev {previous.frontmatter.title}
              </CustomLink>
            )}
          </li>
          <li>
            {next && (
              <CustomLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </CustomLink>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default BlogNavigation;
