import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  Button,
  Input
} from "reactstrap";

import styled from "styled-components";
const NavbarF = styled(Navbar)`
  height: 80px;
  background-color: white;
`;
export default function Header() {
  return (
    <React.Fragment>
      <NavbarF light expand="xs">
       
      </NavbarF>
    </React.Fragment>
  );
}
