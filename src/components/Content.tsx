import React, { FC } from "react";

interface Props {
  content?: any;
  className?: string;
}

const Content: FC<Props> = ({ content, className }) => (
  <div id="blog-post-content" className={className}>
    {content}
  </div>
);

export default Content;
