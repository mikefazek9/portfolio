import React from "react";

const Hero = (props) => {
  return (
    <div className="hero_section">
      <h2 className="hero_title">{props.title}...</h2>
      <div className="links">
        <button className="btn-github">{props.github}</button>
        <button className="btn-linkedin">{props.linkedIn}</button>
      </div>
    </div>
  );
};

export default Hero;
