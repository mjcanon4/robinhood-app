import React from "react";
import Logo from "./images/robinhood.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header_wrapper">
      {/* {logo} */}
      <div className="header_logo">
        <img src={Logo} width={25} alt="logo" />
      </div>
      {/* {search bar} */}
      <div className="header_search">
        <div className="header_searchContainer">
          <input placeholder="Search" type="search" />
        </div>
      </div>
      {/* {menu items} */}
      <div className="header_menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>ß<a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
