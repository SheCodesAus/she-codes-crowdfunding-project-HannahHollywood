import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import EditProjectForm from "../../components/ProjectForm/EditProjectForm";

function EditProjectPage(){
    // State
    const [projectInfo, setProjectInfo] = useState();
    const [categoryData, setCategoryData] = useState();

    //Hooks
    const { id } = useParams();


    // network in use effect
    useEffect(() => {

        // fetch project info
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((project) => {
        setProjectInfo(project);
        });

        // fetch categories
        fetch(`${process.env.REACT_APP_API_URL}category/`)
                .then((results) => {
                    return results.json();
                })
                .then((data) => {
                    setCategoryData(data);
                });

    }, []);

    if (!projectInfo) {
        return <h1>Loading...</h1>
    }


    return <EditProjectForm project={projectInfo} categories={categoryData}/>;
}

export default EditProjectPage;