import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ProjectCard from "../../../components/ProjectCard/ProjectCard";

function CategoryPage() {

    // State
    const [projectList, setProjectList] = useState([]);
    // const [categoryList, setCategoryList] = useState([]);

    // Hooks
    const { slug } = useParams();

    // Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            // const data = await res.json()
            console.log("data", data)
            console.log("slug", slug)

            const filteredData = data.filter((project) => project.category === slug);
            console.log("filteredata", filteredData)
            setProjectList(filteredData);
        });
    }, [slug]);

    // Normal State
    return (
        <>
        {projectList && projectList.length > 0 
            ?   <div id="project-list">
                    {projectList.map((projectData) => {
                        return (
                            <ProjectCard 
                            key={`project-${projectData.id}`} 
                        projectData={projectData} />
                        );
                    })}
                </div>
            : <h3>No Projects in that Category</h3>
        }
        </>
        
    );
}

export default CategoryPage;