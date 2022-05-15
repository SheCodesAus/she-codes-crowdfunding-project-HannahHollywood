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
            <Link to={`/users/${projectData.owner}`}><h4><span role="img" aria-label="Pen">✏️</span> <ProjectOwner owner={projectData.owner}/></h4></Link>
            <Link to={`/category/${projectData.category}`}><h3 id="category"><span role="img" aria-label="Tool">🛠</span> ({projectData.category})</h3></Link>
         </div>
    );
}
    
export default ProjectCard;