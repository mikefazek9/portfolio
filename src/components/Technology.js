import React from "react";
import HTML5 from "../img/html5.svg";
import CSS3 from "../img/css3.svg";
import JS from "../img/javascript.svg";
import NPM from "../img/npm.svg";
import REACTJS from "../img/react.svg";
import SASSCSS from "../img/sass.svg";
function Technology(props) {
  return (
    <div className="tech_section">
      <h2 className="tech_title">{props.title}</h2>
      <div className="image_container">
        <img src={HTML5} alt="html" className="tech_image" />
        <img src={CSS3} alt="html" className="tech_image" />
        <img src={SASSCSS} alt="html" className="tech_image" />
        <img src={JS} alt="html" className="tech_image" />
        <img src={NPM} alt="html" className="tech_image" />
        <img src={REACTJS} alt="html" className="tech_image" />
      </div>
    </div>
  );
}

export default Technology;
