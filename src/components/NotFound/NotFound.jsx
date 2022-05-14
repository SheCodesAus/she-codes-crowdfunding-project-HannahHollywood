import React from "react";

// Styles
import './NotFound.css';

function NotFound() {
    return (
        <>
        <div className="notfound-page-container">
            <h1>Page Not Found <span role="img" aria-label="oops emoji">😬</span></h1>
            <h1>Let's use Doofenshmirtz's Time Travel-Inator to to go back in time! </h1>
            <h3>...actually, why is he still accepting Inventi-Cents for this thing?</h3>
            <img id="timetravel-inator" 
                src={`${process.env.PUBLIC_URL}/assets/images/Doof-TimeTravelInator.webp`} 
                alt="error404"/>
        </div>
        </>
    );
}
    
export default NotFound;