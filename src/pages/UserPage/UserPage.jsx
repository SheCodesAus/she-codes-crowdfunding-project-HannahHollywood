import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Imports
import { Link } from "react-router-dom";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Styles
import "./UserPage.css";

// Components
import BadgesIcon from "../../components/BadgesIcon/BadgesIcon";

function UserPage() {
    // State
    const [userData, setUserData] = useState();
    // const [projectList, setProjectList] = useState([]);
    const [badgeIconData, setBadgeIconData] = useState([]);

    // Hooks
    const { id } = useParams();

    const UserId = window.localStorage.getItem("id");
    const IsLoggedInUser = (UserId === id);

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

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}projects`)
    //         .then((results) => {
    //             return results.json();
    //         })
    //         .then((data) => {
    //             setProjectList(data);
    //         });
    // }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users/badges/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setBadgeIconData(data);
        })
    }, [id]);

    // Loading State
    if (!userData) {
        return <h3>Loading profile...</h3>;

    }

    // function badgeType(badges) {return badges.badge_type};

    // Normal State
    return (
        <div className="user-profile-container">
            <div className="profile-header">
                <h1 id="prof-header-text">Welcome to <span>{userData.username}'s</span> Genius Page!</h1>
            </div>

            <div className="user-profile-info">
                <ul className="user-input">
                    <li><img className="avatar" src={userData.avatar} alt="profile avatar"/></li>
                    <li id="email"><i className="fa fa-envelope"></i> {userData.email}</li>
                    <li id="website">Follow Me:<br></br>
                        <a href={userData.website} target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-globe"></i>
                        </a>                
                    </li>
                </ul>

                <div className="bio-section">
                    <h4 id="about-title">About: </h4>
                    <p id="bio-section">{userData.bio}</p>
                </div>
            </div>

            <div className="badge-card-container">
                <div className="badge-card">
                    {badgeIconData}
                    {userData.badges.map((badgeIconData, key) => {
                        return (
                            <BadgesIcon 
                                key={`/badges-${badgeIconData.id}`}
                                // badgeIconData={badgeIconData}
                                image={badgeIconData.image} 
                                description={badgeIconData.description} 
                            />
                        );
                    })}
                </div>
            </div>

            <div className="edit-button-div">
            {(IsLoggedInUser) &&
                <button className="edit-profile-button"><Link to="edit-profile">Edit Profile</Link></button>}
            </div>
        {/* <div className="user-invention-list">
            <h1>View all of {userData.username}'s Inventions</h1>
            <ul>
            {projectList.map((projectData, key) => {
                    return <ProjectCard 
                        key={`project-${projectData.id}`} 
                        projectData={projectData}
                    />;
                })}
            </ul>
        </div> */}

        </div>
    );
}

export default UserPage;