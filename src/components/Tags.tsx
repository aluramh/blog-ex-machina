import React, { FC, useMemo } from "react";
import { navigate } from "@reach/router";
import { useTheme } from "../context/theme-context";

interface Props {
  tags: string[];
}

const Tags: FC<Props> = (props) => {
  const { tags } = props;
  const { theme } = useTheme();

  // ANCHOR: - Component functions

  const handleTagClick = (tag: string) => {
    console.log(`Pressed the "${tag}" tag!`);
    navigate(`/tags/${tag}`);
  };

  // ANCHOR: - Dynamic classes

  const pillTextColor = useMemo(
    () => (theme === "light" ? "bg-gray-900" : "bg-gray-100"),
    [theme]
  );

  const pillBgColor = useMemo(
    () =>
      theme === "light"
        ? "hover:bg-teal-400 bg-teal-300"
        : "hover:bg-teal-400 bg-teal-500",
    [theme]
  );

  return (
    <div className="flex flex-row">
      {tags.map((tag) => (
        // Pill component
        <div
          key={tag}
          className={`px-3 py-2 mr-3 rounded-full cursor-pointer ${pillBgColor} ${pillTextColor}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
