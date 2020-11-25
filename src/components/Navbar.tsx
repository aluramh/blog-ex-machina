import React, { FC, useState, useMemo, useEffect } from "react";
import { Link } from "gatsby";
import LightsOnIcon from "./icons/LightsOn";
import HomeIcon from "./icons/Home";
import styled from "styled-components";
import CustomLink from "./CustomLink";
import { Theme, useTheme } from "../context/theme-context";

interface Props {
  className?: string;
}

const LightModeToggle = styled.div`
  cursor: pointer;
`;

const Navbar: FC<Props> = (props) => {
  const { className = "" } = props;
  const { theme, toggleTheme } = useTheme();
  const iconClass = "fill-current text-gray-600 dark:text-gray-300";

  return (
    <nav
      id="header"
      role="navigation"
      aria-label="main-navigation"
      className={`
        bg-gray-100 dark:bg-gray-900
        border-b border-gray-400 dark:border-gray-600
        w-full fixed mx-auto px-4 sm:px-6 xl:px-0 z-50`}
    >
      <div className="container mx-auto pl-3">
        <div className="flex flex-row flex-wrap items-center justify-between">
          {/* Right section after Brand */}
          <div className="flex flex-row">
            {/* Brand */}
            <div
              className={`text-gray-700 dark:text-gray-300 navbar-brand mr-3`}
            >
              <CustomLink to="/" title="Logo">
                <HomeIcon
                  size="40px"
                  style={{ transform: "translateY(3px)" }}
                  className={iconClass}
                />
              </CustomLink>
            </div>

            {/* Menu items */}
          </div>

          {/* Action buttons */}
          <LightModeToggle onClick={() => toggleTheme()}>
            <LightsOnIcon
              on={theme === "light"}
              style={{ transform: "translateY(3px)" }}
              className={iconClass}
            />
          </LightModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
