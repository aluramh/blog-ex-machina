import React, { FC } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import { useTheme } from "../../context/theme-context";

interface Props {}

const BlogIndexPage: FC<Props> = () => {
  const { theme } = useTheme();

  // TODO: - This does not work because the themeProvider is not the main one...
  // Need to find out how to wrap ALL gatsby project in themeprovider
  const headerTextClass = theme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <Layout>
      <div>
        <h1
          className={`${headerTextClass} text-gray-800 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 my-6`}
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
