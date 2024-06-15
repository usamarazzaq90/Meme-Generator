import React from "react";
import logo from "/troll-face.png";

function Header() {
  return (
    <header>
      <img className="logo" src={logo} />
      <h1 className="title">MemeGenerator</h1>
      <div className="info">React Course - Project 3</div>
    </header>
  );
}

export default Header;
