import React, { FC } from "react";
import { useTheme } from "../context/theme-context";

interface Props {
  tags: string[];
}

const Tags: FC<Props> = (props) => {
  const { tags } = props;
  const { theme } = useTheme();

  const handleTagClick = (tag: string) => {
    console.log(`Pressed the "${tag}" tag!`);
  };

  const pillTextColor = theme === "light" ? "bg-gray-900" : "bg-gray-100";
  const pillBgColor = theme === "light" ? "bg-teal-400" : "bg-teal-500";

  return (
    <div className="flex flex-row">
      {tags.map((tag) => (
        <div
          key={tag}
          className={`px-3 py-2 mr-3 rounded-lg cursor-pointer ${pillBgColor} ${pillTextColor}`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
