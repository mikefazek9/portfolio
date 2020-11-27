import React from "react";
function Footer(props) {
  return (
    <div className="footer_section">
      <div className="footer-left">
        <span className="fo-text">{props.text}</span>
      </div>
      <div className="footer-right">
        <a href="https://github.com/mikefazek9" className="footlink">
          Github
        </a>
        <a
          href="https://www.facebook.com/Michael.Fazekas34"
          className="footlink"
        >
          Facebook
        </a>
        <a href="mailto:mike.fazek@gmail.com" className="footlink">
          Gmail
        </a>
      </div>
    </div>
  );
}

export default Footer;
