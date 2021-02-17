import React, { useEffect } from "react";
import Icons from "./Icons";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = ()=> {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <div data-aos="fade-down" className="contact_section">
      <h3 data-aos="flip-up" className="con-title">Contact</h3>
      <div data-aos="fade-right" className="icons-list">
        <span>You can find me almost anywhere on the internet!</span>
        <div data-aos="fade-left" className="icons">
          <Icons />
        </div>
      </div>
    </div>
  );
}

export default Contact;
