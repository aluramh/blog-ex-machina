import React, { FC } from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { rhythm, scale } from "../utils/typography";
import SEO from "../components/seo";
import BlogPostLayout from "../components/BlogpostLayout";
import BlogNavigation from "../components/BlogNavigation";
import { Theme } from "../context/theme-context";
import TagsSection from "../components/TagsSection";

interface BlogPostTemplateProps {
  content: any;
  contentComponent: any;
  description: string;
  tags: string[];
  title: string;
  helmet: object;
}

export const BlogPostTemplate: FC<BlogPostTemplateProps> = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BlogPostProps {
  data: {
    markdownRemark: {
      html: any;
      frontmatter: {
        description: string;
        title: string;
        tags: string[];
        // ???
        date;
      };
    };
  };
  pageContext: { next: any; previous: any };
  location: any;
}

const BlogPost: FC<BlogPostProps> = ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data;
  const { previous, next } = pageContext;

  return (
    // @ts-ignore
    <Layout location={location} title="SAMPLE TITELE">
      <BlogPostLayout location={location} className="">
        <SEO
          title={post.frontmatter.title}
          description={
            post.frontmatter.description
            // || post?.excerpt
          }
        />
        <article>
          <header>
            <h1
            // style={{
            //   marginTop: rhythm(1),
            //   marginBottom: 0,
            // }}
            >
              {post.frontmatter.title}
            </h1>
            <p
            // style={{
            //   ...scale(-1 / 5),
            //   display: `block`,
            //   marginBottom: rhythm(1),
            // }}
            >
              {post.frontmatter?.date}
            </p>
          </header>

          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
          // style={{
          //   marginBottom: rhythm(1),
          // }}
          />

          <footer>{/* <Bio /> */}</footer>
        </article>

        {/* Tags */}
        <TagsSection tags={post.frontmatter.tags} />

        {/* Navigation */}
        <BlogNavigation previous={previous} next={next} />
      </BlogPostLayout>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
