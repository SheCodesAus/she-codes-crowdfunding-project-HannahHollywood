import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Imports
import { Link } from "react-router-dom";

// Styles
import "./UserPage.css";

// Imports
// import { Link } from "react-router-dom";

// Components
import Badges from "../../components/Badges/Badges";

function UserPage() {
    // State
    const [userData, setUserData] = useState();

    // Hooks
    const { id } = useParams();

    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        })
    }, [id]);

    // Loading State
    // "Skeleton" Loading
    if (!userData) {
        return <h3>Loading profile...</h3>;
    }

    return (
        <div className="profile-wrapper">
            <div className="photo-and-info">
                <h1>Welcome to {userData.username}'s Genius Page!</h1>
                <img className="avatar" src={userData.avatar} alt="profile avatar"/>
                <ul>
                    <li>{userData.bio}</li>
                    <li>{userData.email}</li>
                    <li>{userData.website}</li>
                </ul>
            </div>

            <div className="badges">
                <p>
                {userData.badges.map((badgeData, key) => {
                    return (
                        <Badges 
                            key={`badges-${badgeData.id}`} 
                            image={badgeData.image} 
                            description={badgeData.description} 
                        /> 
                    );
                })};
                </p>
            </div>

            <button><Link to="edit-profile">Edit Profile</Link></button>

        </div>
    );
}

export default UserPage;