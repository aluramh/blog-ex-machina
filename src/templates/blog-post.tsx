import React, { FC } from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Content from '../components/Content'
import { rhythm, scale } from '../utils/typography'
import SEO from '../components/seo'
import BlogPostLayout from '../components/BlogpostLayout'
import BlogNavigation from '../components/BlogNavigation'
import { Theme } from '../context/theme-context'
import TagsSection from '../components/TagsSection'

interface BlogPostTemplateProps {
  content: any
  contentComponent: any
  description: string
  tags: string[]
  title: string
  helmet: object
}

interface Post {
  markdownRemark: {
    id: string
    html: string
    frontmatter: {
      date: string
      title: string
      description: string
      tags: string[]
    }
  }
}

// ANCHOR: - This is the component used by the CMS for Blogpost previews

export const BlogPostTemplate: FC<BlogPostTemplateProps> = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ''}

      <div className={`prose lg:prose-xl text-gray-700`}>
        <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
          {title}
        </h1>

        <p>{description}</p>

        <PostContent content={content} />

        <TagsSection tags={tags} />
      </div>
    </section>
  )
}

// ANCHOR: - Component rendered by Gatsby for each blogpost

interface BlogPostProps {
  data: Post
  pageContext: { next: any; previous: any }
  location: any
}

const BlogPost: FC<BlogPostProps> = ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data
  const { previous, next } = pageContext

  return (
    // @ts-ignore
    <Layout location={location} title='SAMPLE TITELE'>
      <BlogPostLayout location={location} className=''>
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
              className='text-gray-600 dark:text-gray-400'
              id='dateee'
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
  )
}

export default BlogPost

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
`
