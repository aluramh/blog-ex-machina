import React, { FC, useMemo } from "react";
import { navigate } from "@reach/router";
import { useTheme } from "../context/theme-context";

interface Props {
  tags: string[];
}

const TagsSection: FC<Props> = (props) => {
  const { tags } = props;

  // ANCHOR: - Component functions

  const handleTagClick = (tag: string) => {
    navigate(`/tags/${tag}`);
  };

  return (
    <div className="flex flex-row">
      {tags.map((tag) => (
        // Pill component
        <div
          key={tag}
          className={`
            text-sm rounded-full cursor-pointer px-3 py-2 mr-3 
          bg-green-200 hover:bg-green-400 text-gray-900 
            dark:bg-red-500 dark:hover:bg-red-400 dark:text-gray-100
          `}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagsSection;
