import React, { FC } from "react";
import PropTypes from "prop-types";

interface Props {
  content?: any;
  className?: string;
}

export const HTMLContent: FC<Props> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content: FC<Props> = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export default Content;
