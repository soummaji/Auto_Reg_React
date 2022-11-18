import React,{useState} from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

const Navbar =()=> {
    const [state, setState] = useState({isVisible: true});
    return (
      <SideNav expanded={state.isVisible}>
        <SideNav.Toggle
          onClick={() => {
            setState({ isVisible: !state.isVisible });
          }}
          
        />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PXrDC_qzdQvtXXRT70YBofNNyA6LgPhBNz61XqV2eyz5RE8KO2gYcjmpmDgop2ChRp4&usqp=CAU" width={150} height={100}></img>
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
          <h6>CIA4Auto© Engine Powered by</h6>
          <img src="data:image/png;base64,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"></img>
        </SideNav.Nav>
      </SideNav>
    );
  }

export default Navbar;
