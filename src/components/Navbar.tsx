import React, { FC, useState, useMemo, useEffect } from "react";
import { Link } from "gatsby";
import LightsOnIcon from "./icons/LightsOn";
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
  const { theme, toggleTheme, bodyBackgroundClass } = useTheme();
  const { className = "" } = props;

  const lightbulbColor = theme === "light" ? "black" : "white";
  const navbarLinkClass = theme === "light" ? "text-gray-700" : "text-gray-300";
  const navbarBorder =
    theme === "light" ? "border-gray-500" : "border-gray-700 ";

  return (
    <nav
      id="header"
      role="navigation"
      aria-label="main-navigation"
      className={`${bodyBackgroundClass} border-b ${navbarBorder} w-full fixed mx-auto px-4 sm:px-6 xl:px-0 z-50`}
    >
      <div className="container mx-auto pl-3">
        <div className="flex flex-row flex-wrap items-center justify-between">
          {/* Right section after Brand */}
          <div className="flex flex-row">
            {/* Brand */}
            <div className={`${navbarLinkClass} navbar-brand mr-3`}>
              {window.location.pathname !== "/" && (
                <CustomLink to="/" title="Logo">
                  Home
                </CustomLink>
              )}
            </div>

            {/* Menu items */}
          </div>

          {/* Action buttons */}
          <LightModeToggle onClick={() => toggleTheme()}>
            <LightsOnIcon
              on={theme === "light"}
              style={{ transform: "translateY(3px)" }}
              color={lightbulbColor}
            />
          </LightModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
