import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Imports
import { Link } from "react-router-dom";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import BadgeIconPage from "./BadgeIconPage/BadgeIconPage";

// Styles
import "./UserPage.css";

// Imports
// import { Link } from "react-router-dom";

// Components
import BadgesIcon from "../../components/BadgesIcon/BadgesIcon";

function UserPage() {
    // State
    const [userData, setUserData] = useState();
    // const [projectList, setProjectList] = useState([]);
    const [badgeIconData, setBadgeIconData] = useState();

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

    // // Loading State
    // if (!badgeIconData) {
    //     return <h3>You have no badges 😔</h3>;
    // }

    // Normal State
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

            <div className="badge-card">
                    {badgeIconData}
                    {userData.badges.map((badgeIconData, key) => {
                        return (
                            <BadgesIcon 
                                key={`users/badges-${badgeIconData.id}`} 
                                image={badgeIconData.image} 
                                description={badgeIconData.description} 
                            />
                        );
                    })}
            </div>

            <button><Link to="edit-profile">Edit Profile</Link></button>

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