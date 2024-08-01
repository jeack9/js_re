import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import route from "./route/index";

export default function LayoutComponent() {
  const routes = useRoutes(route);
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink tag={RRNavLink} to="/condition">
            Condtion
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/event">
            event
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/book">
            Book
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/prodstate">
            prodstate
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/effect">
            effect
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/formref">
            formref
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/router">
            router
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/boardcomp">
            BoardComponent
          </NavLink>
        </NavItem>
      </Nav>
      {routes}
    </div>
  );
}
