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
        fetch(`${process.env.REACT_APP_API_URL}categories/`)
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


    return (
        <>
        <div className="editproject-form-wrapper">
            <div id="editproject-form">
                    <h1>Edit Your Invention ⚛︎</h1>
                    <EditProjectForm project={projectInfo} categories={categoryData}/>
            </div>
        </div>
        
        <div className="categories">
            <h1>Type to Select from the Following 14 Categories:</h1>
            <h2>Genius Categories:</h2>
                <ul>
                    <li>Diabolical</li>
                    <li>Whimsical</li>
                    <li>Experimental</li>
                    <li>Mischievous</li>
                    <li>Maniacal</li>
                    <li>Weaponry</li>
                    <li>Evil</li>
                </ul>
            <h2>"Normie" Categories</h2>
                <ul>
                    <li>Music</li>
                    <li>Food</li>
                    <li>Animals</li>
                    <li>Money</li>
                    <li>Space</li>
                    <li>Time</li>
                    <li>Silly</li>
                </ul>
        </div>
        </>
    );
}

export default EditProjectPage;