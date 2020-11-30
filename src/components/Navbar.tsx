import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
interface AppState {
  scrollY: number;
}

class TopNav extends Component<{}, AppState> {
  public constructor(props: {}) {
    super(props);
    this.state = { scrollY: 0 };
  }

  onScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    let {
      background,
      variant
    }: { background: string; variant: "dark" | "light" | undefined } = {
      background: "transparent",
      variant: "light"
    };
    if (window.innerWidth < 700 || this.state.scrollY > 0) {
      background = "RoyalBlue";
      variant = "dark";
    } else {
      background = "transparent";
      variant = "light";
    }
    return (
      <>
        <Navbar
          variant={variant}
          expand="lg"
          fixed="top"
          style={{ background }}
        >
          <NavbarBrand>
            <img
              src="https://cdn.discordapp.com/avatars/772048847802335272/6ff79ffc14d3d3b23a819ffbb9b9a22f.png?size=2048"
              width="30"
              height="30"
              alt="logo"
              style={{ borderRadius: "50%" }}
            />{" "}
            Cosmic Advertising
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#ayush">Rules </Nav.Link>
              <Nav.Link href="/#projects">Guides</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://blog.ayushkr.me/" target="_blank">
                <FontAwesomeIcon icon={faDiscord} /> Discord Server
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopNav;
