import React from "react";
import Icons from "./Icons";
function Contact() {
  return (
    <div className="contact_section">
      <h3 className="con-title">Contact</h3>
      <div className="icons-list">
        <span>You can find me almost anywhere on the internet!</span>
        <div className="icons">
          <Icons />
        </div>
      </div>
    </div>
  );
}

export default Contact;
