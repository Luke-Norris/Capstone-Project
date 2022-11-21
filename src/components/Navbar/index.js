import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar2 = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/floorplan" activeStyle>
            Home
          </NavLink>
          <NavLink to="/metrics" activeStyle>
            Metrics
          </NavLink>
          <NavLink to="/entry" activeStyle>
            Entry
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar2;