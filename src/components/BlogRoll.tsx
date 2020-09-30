import React, { FC } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import CustomLink from "./CustomLink";
import { useTheme } from "../context/theme-context";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: any[];
    };
  };
  count: number;
}

/**
 *
 * @param props This component renders a long list of all the Blog posts that are available with the query
 */
const BlogRoll: FC<Props> = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const { theme, toggleTheme } = useTheme();

  const headerTextClass = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const articleTextClass = theme === "dark" ? "text-gray-400" : "text-gray-700";

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div key={post.id}>
            <article
              className={`my-3 mb-12 ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header>
                {/* Featured image, if there is one */}
                {/* {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null} */}

                {/* Post data */}
                <div className="flex flex-col">
                  <time className="text-base leading-6 font-medium text-gray-500 mb-1">
                    {post.frontmatter.date}
                  </time>

                  <div className="mb-3">
                    <CustomLink
                      className={`${headerTextClass} text-2xl leading-8 font-bold tracking-tight bg-none`}
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </CustomLink>
                  </div>
                </div>
              </header>

              <p className={`prose max-w-none text-gray-500 mb-3 ${theme}`}>
                {post.excerpt}
              </p>

              <CustomLink
                className="text-teal-500 hover:text-teal-600 bg-none"
                to={post.fields.slug}
              >
                Keep Reading →
              </CustomLink>
            </article>
          </div>
        ))}
    </div>
  );
};

// ANCHOR: - Query for blogposts and rendering

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    // @ts-ignore
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
