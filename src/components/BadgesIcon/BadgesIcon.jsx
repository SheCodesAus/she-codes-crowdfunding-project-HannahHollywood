import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Styles
import"./BadgesIcon.css";

function BadgesIcon() {
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
        <div>
            <ul className="badge-card">
                <img src={badgeIconData.image} alt="badge logo"/>
                <li>{badgeIconData.description}</li>
                <li>Level: {badgeIconData.badge_goal}</li>
            </ul>
        </div>
    );
}

export default BadgesIcon;





// import React from "react";
// import { Link } from "react-router-dom";

// // // Styles
// // import "./BadgeCard.css";

// function BadgeIcon( {badgeIconData} ) {
//     return (
//         <div className="badge-card">
//             <Link to={`/users/badges/${badgeIconData.id}`}>
//                 <img src={badgeIconData.image} alt="badge logo"/>
//                 <h3>{badgeIconData.description}</h3>
//             </Link>
//          </div>
//     );
// }
    
// export default BadgeIcon;