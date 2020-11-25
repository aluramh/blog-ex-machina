import React, { FC } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

interface Props {}

const BlogIndexPage: FC<Props> = () => {
  return (
    <Layout>
      <div>
        <h1
          className={`text-gray-800 dark:text-gray-200 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 my-6`}
        >
          Latest Stories
        </h1>
      </div>
      <section className="">
        <div className="">
          <div className="">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndexPage;
