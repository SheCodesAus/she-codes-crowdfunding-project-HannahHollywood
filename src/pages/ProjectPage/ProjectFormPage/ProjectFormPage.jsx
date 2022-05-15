import React from "react";

// Components
import ProjectForm from "../../../components/ProjectForm/ProjectForm";

// Styles
import "./ProjectFormPage.css";

function ProjectFormPage() {
    return (
    <>
    <div className="projectform-page-wrapper">
        <div id="project-form">
            <h1>Create Your Invention ⚛︎</h1>
            <ProjectForm />
        </div>
        
        <div className="categories">
            <h2>Type one of the Following 14 Categories:</h2>
            <h3>Genius Categories:</h3>
                <ul>
                    <li>Diabolical</li>
                    <li>Whimsical</li>
                    <li>Experimental</li>
                    <li>Mischievous</li>
                    <li>Maniacal</li>
                    <li>Weaponry</li>
                    <li>Evil</li>
                </ul>
            <br></br>
            <h3>"Normie" Categories</h3>
                <ul>
                    <li>Music</li>
                    <li>Food</li>
                    <li>Animals</li>
                    <li>Money</li>
                    <li>Space</li>
                    <li>Time</li>
                    <li>Silly</li>
                </ul>
        </div>
        
    </div>
    </>
    );
}

export default ProjectFormPage;