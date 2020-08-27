import React, { FC, useState } from "react";
import { Link } from "gatsby";
import LightsOnIcon from "./icons/LightsOn";
import styled from "styled-components";

interface Props {}

const LightModeToggle = styled.div`
  cursor: pointer;
`;

const Navbar: FC<Props> = (props) => {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <nav
      id="header"
      role="navigation"
      aria-label="main-navigation"
      className={`bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16`}
    >
      <div className="container mx-auto">
        <div
          id="navMenu"
          className="flex flex-row flex-wrap items-center justify-between items-center"
        >
          {/* Right section after Brand */}
          <div className="flex flex-row">
            {/* Brand */}
            <div className="navbar-brand mr-3">
              <Link to="/" className="navbar-item" title="Logo">
                My blog
              </Link>
            </div>

            {/* Menu items */}
            <div className="flex flex-row flex-grow">
              <div>Home</div>
              <div>Blog</div>
              <div>About</div>
            </div>
          </div>

          {/* Action buttons */}
          <LightModeToggle onClick={() => setLightsOn(!lightsOn)}>
            <LightsOnIcon
              on={lightsOn}
              style={{ transform: "translateY(3px)" }}
            />
          </LightModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
