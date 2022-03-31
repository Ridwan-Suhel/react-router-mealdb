import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <ul className="nav-ul">
        <li>
          <CustomLink to="/home">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/restaurent">Restaurent</CustomLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
