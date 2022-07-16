import React from "react";
import { NavLink } from "react-router-dom";
import { navbarProps } from "../../types/type";
const NavBar = ({ handleBackground }: navbarProps) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            className="navbar__link"
            to="/"
            onClick={() => handleBackground("home")}
          >
            <span className="navbar__counter">00</span> HOME
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__link"
            to="/destination"
            onClick={() => handleBackground("destination")}
          >
            <span className="navbar__counter">01</span> DESTINATION
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__link"
            to="/crew"
            onClick={() => handleBackground("crew")}
          >
            <span className="navbar__counter">02</span> CREW
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__link"
            to="/technology"
            onClick={() => handleBackground("technology")}
          >
            <span className="navbar__counter">03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
