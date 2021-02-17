import React, { useEffect } from "react";
import HTML5 from "../img/html5.svg";
import CSS3 from "../img/css3.svg";
import JS from "../img/javascript.svg";
import NPM from "../img/npm.svg";
import REACTJS from "../img/react.svg";
import SASSCSS from "../img/sass.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const Technology=(props)=> {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="tech_section">
      <h2 data-aos="fade-up" className="tech_title">{props.title}</h2>
      <div className="image_container">
        <img data-aos="fade-right" src={HTML5} alt="html" className="tech_image" />
        <img data-aos="fade-right" src={CSS3} alt="html" className="tech_image" />
        <img data-aos="fade-up" src={SASSCSS} alt="html" className="tech_image" />
        <img data-aos="fade-up" src={JS} alt="html" className="tech_image" />
        <img data-aos="fade-left" src={NPM} alt="html" className="tech_image" />
        <img data-aos="fade-left" src={REACTJS} alt="html" className="tech_image" />
      </div>
    </div>
  );
}

export default Technology;
