import React, { FC, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

interface Props {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
          };
        };
      }[];
      totalCount: number;
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    tag: string;
  };
}

const TagRoute: FC<Props> = (props) => {
  const posts = props.data.allMarkdownRemark.edges;
  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));

  const title = props.data.site.siteMetadata.title;
  const tag = props.pageContext.tag;
  const totalCount = props.data.allMarkdownRemark.totalCount;

  const tagHeader = useMemo(
    () =>
      `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with “${tag}”`,
    [totalCount, tag]
  );

  return (
    <Layout>
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div className="mb-6">
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
              <ul className="taglist">{postLinks}</ul>
              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
