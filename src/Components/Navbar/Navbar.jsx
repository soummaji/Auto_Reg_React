import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

function Navbar(props) {
    const state = { isVisible: true };
    return (
      <SideNav expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
            <i class="bi bi-house-door"></i>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="application">
            <NavIcon>
            <i class="bi bi-grid-3x3-gap-fill"></i>
            </NavIcon>
            <NavText>Application</NavText>
          </NavItem>
          <NavItem eventKey="user">
            <NavIcon>
            <i class="bi bi-people-fill"></i>
            </NavIcon>
            <NavText>User Management</NavText>
          </NavItem>
          <NavItem eventKey="help">
            <NavIcon>
            <i class="bi bi-info-circle-fill"></i>
            </NavIcon>
            <NavText>Need Help</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }

export default Navbar;
