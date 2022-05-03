import React, { useState, useEffect } from "react";

function Badges({image, description, id}) {
    // State
    const [badgeData, setBadgeData] = useState();

    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/badges/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setBadgeData(data);
        });
    }, [id]);

 if (!badgeData) {
     return null
 }

    // Normal State
    return (
        <ul className="badges">
            <li>
                {image}
            </li>
            <li>
                Badge Type: {description}
            </li>
        </ul>    
    );
}

export default Badges;