import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./GeniusCard.css";

// Components

function GeniusCard( {userData} ) {
    return (
        <div className="genius-card">
            <Link to={`/users/${userData.id}`}>
                <img src={userData.avatar} alt="user avatar"/>
                <h3>{userData.username}</h3>
            </Link>
                <h3>{userData.bio}</h3>
         </div>
    );
}
    
export default GeniusCard;