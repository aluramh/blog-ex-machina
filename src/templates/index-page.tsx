import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import CustomLink from "../components/CustomLink";
import { useTheme } from "../context/theme-context";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const { theme } = useTheme();

  const headerTextClass = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const articleTextClass = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const moreButtonClass = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div className="antialiased">
      {/* Center all the content in the middle, for readability */}
      <div className="px-32">
        {/* Main title */}
        <h1
          className={`${headerTextClass} text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 my-6`}
        >
          My blog about whatever
        </h1>

        {/* List of recent blogposts */}
        {/* <h2
          className={`${headerTextClass} text-xl leading-8 font-extrabold tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-12 mb-4`}
        >
          Latest
        </h2> */}
        <BlogRoll />

        {/* Read more (all the blogposts) */}
        <div>
          <CustomLink
            className={`${moreButtonClass} bg-none no-underline hover:underline`}
            style={{ textShadow: "none" }}
            to="/blog"
          >
            Read more
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// };

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
