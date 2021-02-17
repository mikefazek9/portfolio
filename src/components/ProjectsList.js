import React, { useEffect } from "react";
// imports ext
import apipro from "../img/apipro.png";
import advice from "../img/advice.png";
import Tw from "../img/tw.png";
import tch from "../img/tch.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectsList=()=> {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <>
    {/* project 1 */}
      <div data-aos="fade-right" className="projects_list">
        <a href="https://mikesrecipeapp.netlify.app/">
          <img src={apipro} alt="project1" className="project_image" />
        </a>
        <div className="hover-detail">
          <h3>Recipe API Project</h3>
          <p>
            Recipe search application I built, using React.js with Hooks. Pull
            Data from API to display food name, calories and ingredients.
          </p>
        </div>
        <a href="https://github.com/mikefazek9/recipeapp" className="icons">
          <GitHubIcon
            style={{ color: "white", fontSize: 40, paddingTop: 10 }}
          />
        </a>
        <a href="https://mikesrecipeapp.netlify.app/" className="icons">
          <WebIcon style={{ color: "white", fontSize: 40, paddingTop: 10 }} />
        </a>
      </div>
      {/* project number 2 */}
      <div data-aos="fade-down" className="projects_list">
        <a href="https://advicegenerator1.netlify.app/">
          <img src={advice} alt="project1" className="project_image" />
        </a>
        <div className="hover-detail">
          <h3>Advice Generator</h3>
          <p>
            Advice Generator, built using react Hooks and API. Generates life
            qoutes on button click (5 second delay between clicks) also use
            keyframes to shake button on hover.
          </p>
        </div>
        <a href="https://github.com/mikefazek9/adviceproject" className="icons">
          <GitHubIcon
            style={{ color: "white", fontSize: 40, paddingTop: 10 }}
          />
        </a>
        <a href="https://advicegenerator1.netlify.app/" className="icons">
          <WebIcon style={{ color: "white", fontSize: 40, paddingTop: 10 }} />
        </a>
      </div>
      {/* project 3 */}
      <div data-aos="fade-up" className="projects_list">
        <a href="https://tammywideman.com/">
          <img src={Tw} alt="project3" className="project_image" />
        </a>
        <div className="hover-detail">
          <h3>Tammy Wideman</h3>
          <p>
            Photography site I built for a friend at church, using HTML, CSS,
            Javascript.
          </p>
        </div>
        {/* <a href="./" className="icons">
          <GitHubIcon
            style={{ color: "white", fontSize: 40, paddingTop: 10 }}
          />
        </a> */}
        <a href="https://tammywideman.com/" className="icons">
          <WebIcon style={{ color: "white", fontSize: 40, paddingTop: 10 }} />
        </a>
      </div>
      {/* project 4 TCH */}
      <div data-aos="fade-left"className="projects_list">
        <a href="https://taylorscustomhomes.netlify.app/index.html">
          <img src={tch} alt="taylor custom homes" className="project_image" />
        </a>
        <div className="hover-detail">
          <h3>Taylor Custom Homes</h3>
          <p>
            Technologies used HTML5, CSS3 and JavaScript.
          </p>
          <p>
            Created sliding effect with JavaScript, converted powerpoint into a Video slideshow at clients request. utilized CSS for design.
          </p>
        </div>
        <a href="https://github.com/mikefazek9/taylorcustoms" className="icons">
          <GitHubIcon
            style={{ color: "white", fontSize: 40, paddingTop: 10 }}
          />
        </a>
        <a href="https://taylorscustomhomes.netlify.app/index.html/" className="icons">
          <WebIcon style={{ color: "white", fontSize: 40, paddingTop: 10 }} />
        </a>
      </div>
    </>
  );
}

export default ProjectsList;
