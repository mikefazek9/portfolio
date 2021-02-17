import React from "react";
// import video from "../img/blue.mp4"
const Hero = (props) => {
  const social = {
    twitter: "https://twitter.com/mike_fazek",
    facebook: "https://www.facebook.com/Michael.Fazekas34/",
    gmail: "mike.fazek@gmail.com",
    linkedIn: "https://www.linkedin.com/in/michael-fazekas-10267b101/",
    github: "https://github.com/mikefazek9",
  };
  return (
    <div className="hero_section">
      <h2 className="hero_title">{props.title}...</h2>
      <div className="links">
        <button className="btn-github"><a href={social.github} className="btn-hero">{props.github}</a></button>
        <button className="btn-linkedin"><a href={social.linkedIn} className="btn-hero">{props.linkedIn}</a></button>
        {/* <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4"/>
        </video> */}
      </div>
    </div>
  );
};

export default Hero;
