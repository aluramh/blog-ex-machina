import React, { FC, useMemo } from "react";
import { navigate } from "@reach/router";
import { useTheme } from "../context/theme-context";

interface Props {
  tags: string[];
}

const TagsSection: FC<Props> = (props) => {
  const { tags } = props;
  const { theme } = useTheme();

  // ANCHOR: - Component functions

  const handleTagClick = (tag: string) => {
    console.log(`Pressed the "${tag}" tag!`);
    navigate(`/tags/${tag}`);
  };

  // ANCHOR: - Dynamic classes

  const pillTextColor = useMemo(
    () => (theme === "light" ? "text-gray-900" : "text-gray-100"),
    [theme]
  );

  const pillBgColor = useMemo(
    () =>
      theme === "light"
        ? "hover:bg-teal-400 bg-teal-200"
        : "hover:bg-teal-400 bg-teal-500",
    [theme]
  );

  return (
    <div className="flex flex-row">
      {tags.map((tag) => (
        // Pill component
        <div
          key={tag}
          className={`text-sm rounded-full cursor-pointer px-3 py-2 mr-3 ${pillBgColor} ${pillTextColor}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagsSection;
