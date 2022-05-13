import React, { useState, useEffect } from "react";

// Components
import FeatureCarousel from "../../components/FeatureCarousel/FeatureCarousel";

// Styles
import './HomePage.css';

// Imports
import { Link } from "react-router-dom";

function HomePage() {

    // States
    const [projectData, setProjectData] = useState();

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data);
            });
    }, [projectData]);

    return (
        <div className="homepage-wrapper">
            <div className="feature-carousel">
                <FeatureCarousel />
            </div>
            
            <div id="welcome-text">
                <br></br>
                <p id="intro-text">
                    Have some brilliant ideas of your own?!<span role="img" aria-label="Evil">😈</span>
                    <br></br>
                    Create an Account, Post your Invention and watch the Inventi-Cents roll in!
                </p>
                <br></br>
                <p>
                    <button className="create-invention-btn"><Link to="/projects/create/">Create Your Invention</Link></button>
                </p>
            </div>
        </div>
    );
}

export default HomePage;