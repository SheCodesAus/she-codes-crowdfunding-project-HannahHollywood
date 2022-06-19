import React, { useState, useEffect } from "react";

// Components
import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Styles
import './InventionsPage.css';

// Imports
import { Link } from "react-router-dom";

function InventionsPage() {

    // States
    const [projectList, setProjectList] = useState([]);

    // Check a User is Logged In:
    const token = window.localStorage.getItem("token");
    const isUserLoggedin = !(token === null || token === undefined || token === "undefined")

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data);
            });
    }, []);

    return (
        <div className="inventions-page-wrapper">
            <div id="intro-text">
                <h1>View all Inventions Here! ⚛︎</h1>

            {(isUserLoggedin) &&
                <button className="create-invention-btn"><Link to="/projects/create/">Create Invention</Link></button>}
            </div>

            <div id="project-list">
                {projectList.map((projectData, key) => {
                    return <ProjectCard 
                        key={`project-${projectData.id}`} 
                        projectData={projectData}
                    />;
                })}
            </div>
        </div>
    );
}

export default InventionsPage;