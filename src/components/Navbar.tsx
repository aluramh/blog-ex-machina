import React from "react";
import { Link } from "gatsby";
import LightsOnIcon from "./icons/LightsOn";

interface State {
  active: boolean;
  navBarActiveClass: string;
}

const Navbar = class extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <div className="container" style={{ backgroundColor: "transparent" }}>
          {/* <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              My blog
            </Link>
          </div> */}
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div
              className="navbar-end has-text-centered"
              style={{ cursor: "pointer" }}
            >
              <LightsOnIcon />
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
