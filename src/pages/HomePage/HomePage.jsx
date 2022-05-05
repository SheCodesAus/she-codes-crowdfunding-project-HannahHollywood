import React, { useState, useEffect } from "react";

// Components
import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Styles
import './HomePage.css';

// Imports
import { Link } from "react-router-dom";

function HomePage() {

    // States
    const [projectList, setProjectList] = useState([]);

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
        <div className="homepage-wrapper">
            <div id="welcome-text">
                <h1> 
                    <img id="logo-img" 
                        src={`${process.env.PUBLIC_URL}/assets/images/Logo-FundInator.png`} 
                        alt="logo"/>
                </h1>

                <p id="intro-text">
                    A website where geniuses can fund their diabolical inventions <span role="img" aria-label="Evil">😈</span>
                </p>
                <br></br>
                <p>
                    <button><Link to="/projects/create/">POST NEW PROJECT</Link></button>
                </p>

            </div>

            <div id="project-list">
                {projectList.map((projectData, key) => {
                    return <ProjectCard 
                        key={`project-${projectData.id}`} 
                        projectData={projectData}
                    />;
                })}
            </div>
                
                <br></br>
            <div>
                SOMETHING ELSE WILL GO HERE
            </div>

        </div>
    );
}

export default HomePage;