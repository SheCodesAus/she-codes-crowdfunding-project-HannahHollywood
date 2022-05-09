import React from "react";

// Components
import ProjectForm from "../../../components/ProjectForm/ProjectForm";

function ProjectFormPage() {
    return (
    <>
    <div className="projectform-page-wrapper">
        <div id="project-form">
            <h1>Create Your Invention ⚛︎</h1>
            <ProjectForm />
        </div>
        
        <div className="categories">
            <h1>Type to Select from the Following 14 Categories:</h1>
            <h2>Genius Categories:</h2>
                <ul>
                    <li>Diabolical</li>
                    <li>Whimsical</li>
                    <li>Experimental</li>
                    <li>Mischievous</li>
                    <li>Maniacal</li>
                    <li>Weaponry</li>
                    <li>Evil</li>
                </ul>
            <h2>"Normie" Categories</h2>
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