import React from "react";

// Styles
import './NotFound.css';

// Imports
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
        <div className="notfound-page-container">
            <h1>Page Not Found <span role="img" aria-label="oops emoji">⛔️</span></h1>
            <h2>Let's use <span>Doofenshmirtz's</span> <Link to="/project/6">Time Travel-Inator</Link> to to go back in time!</h2>
            <h3>...actually, why is he still accepting Inventi-Cents for this thing?</h3>
            <Link to="/project/6"><img id="timetravel-inator" 
                src={`${process.env.PUBLIC_URL}/assets/images/Doof-TimeTravelInator.webp`} 
                alt="error404"/></Link>
        </div>
        </>
    );
}
    
export default NotFound;