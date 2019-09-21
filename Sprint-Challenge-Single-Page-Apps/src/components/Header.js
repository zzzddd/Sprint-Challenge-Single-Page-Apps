import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, NavLink as NavL } from "reactstrap";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav tabs>
        <NavItem>
          <NavL tag={NavLink} to="/">
            Home Page
          </NavL>
        </NavItem>
        <NavItem>
          <NavL tag={NavLink} to="/character">
            Characters
          </NavL>
        </NavItem>
      </Nav>
    </header>
  );
}
