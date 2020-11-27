import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="./"><h1 className="title">
        Mike
        <span className="lastname">Fazekas</span>
      </h1></a>
      {/* <nav>
        <a href="./" id="#about">About</a>
        <a href="./">Projects</a>
        <a href="./">Contact</a>
        <a href="./">Blog</a>
      </nav> */}
    </div>
  );
};

export default Navbar;
