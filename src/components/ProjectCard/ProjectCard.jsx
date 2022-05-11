import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./ProjectCard.css";

// Components
import ProjectOwner from "../ProjectPageComponents/ProjectOwner/ProjectOwner";

function ProjectCard( {projectData} ) {
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="the project"/>
                <h3>{projectData.title}</h3>
            </Link>
            <h3><span role="img" aria-label="Pen">✏️</span> <ProjectOwner owner={projectData.owner}/></h3>
            <h3><span role="img" aria-label="Tool">🛠</span> ({projectData.category})</h3>
         </div>
    );
}
    
export default ProjectCard;