import React, { useState, useEffect } from "react";

// Components
import NotFound from "../../components/NotFound/NotFound";

function PageNotFound() {

    // States
    const [projectData, setProjectData] = useState();

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data);
            });
    }, [projectData]);

    return (
        <NotFound />
    );
}

export default PageNotFound;