import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Imports
// import { Link } from "react-router-dom";

// Styles
// import "./Badges.css";

function BadgeIconPage() {
    // State
    const [badgeIconData, setBadgeIconData] = useState();

    // Hooks
    const { id } = useParams();

    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/badges/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setBadgeIconData(data);
        })
    }, [id]);

    // Loading State
    if (!badgeIconData) {
        return <h3>Loading Badge...</h3>;
    }

    // Normal State
    return (
        <div className="badge-wrapper">
            <h1>Badge Icon</h1>
            <ul>
                <img className="badge logo" src={badgeIconData.image} alt="badge logo"/>
                <li>{badgeIconData.description}</li>
                <li>Level: {badgeIconData.badge_goal}</li>
            </ul>
        </div>
    );
}

export default BadgeIconPage;




// BELOW:
// SAVE FOR LATER (CREATING LIST OF BADGES)

// const [badgeList, setBadgeList] = useState([]); 

// useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/users/badges/${id}`)
//     .then((results) => {
//         return results.json();
//     })
//     .then((data) => {
//         setBadgeList(data);
//     })
// }, [id]);

// {/* <p>
// {badgeList.map((badgeIconData, key) => {
//     return (
//         <BadgeIconPage 
//             key={`/users/badges-${badgeIconData.id}`}
//             image={badgeIconData.image} 
//             description={badgeIconData.description}
//             badgeIconData={badgeIconData} 
//         /> 
//     );
// })};
// </p> */}