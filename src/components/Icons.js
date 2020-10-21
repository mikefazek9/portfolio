import React from "react";

function Icons() {
  const social = {
    twitter: "https://twitter.com/mike_fazek",
    facebook: "https://www.facebook.com/Michael.Fazekas34/",
    gmail: "mike.fazek@gmail.com",
    linkedIn: "https://www.linkedin.com/in/michael-fazekas-10267b101/",
    github: "https://github.com/mikefazek9",
  };

  return (
    <>
      <a href={social.twitter}>
        <i className="fab fa-twitter-square"></i>
      </a>
      <a href={social.facebook}>
        <i className="fab fa-facebook-square"></i>
      </a>
      <a href="mailto:mike.fazek@gmail.com">
        <i className="fas fa-envelope"></i>
      </a>
      <a href={social.linkedIn}>
        <i className="fab fa-linkedin"></i>
      </a>
      <a href={social.github}>
        <i className="fab fa-github-square"></i>
      </a>
    </>
  );
}

export default Icons;
