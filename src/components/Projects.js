import React, { useEffect } from "react";
import ProjectsList from "./ProjectsList";
import Aos from "aos";
import "aos/dist/aos.css";
const Projects=()=> {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="projects_section">
      <h2 data-aos="fade-up" id="prj-heading">Projects...</h2>
      {/* image 1 */}
      <div className="project_menu">
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
