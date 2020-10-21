import React from "react";
import ProjectsList from "./ProjectsList";
function Projects() {
  return (
    <div className="projects_section">
      <h2 id="prj-heading">Projects...</h2>
      {/* image 1 */}
      <div className="project_menu">
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
