import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="title">
        Mike
        <span className="lastname">Fazekas</span>
      </h1>
      <nav>
        <a href="./">About</a>
        <a href="./">Projects</a>
        <a href="./">Contact</a>
        <a href="./">Blog</a>
      </nav>
    </div>
  );
};

export default Navbar;
