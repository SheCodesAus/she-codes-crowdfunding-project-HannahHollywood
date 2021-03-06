import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

//components
import EditProjectForm from "../../components/ProjectForm/EditProjectForm";

// Styles
import './EditProjectPage.css';

function EditProjectPage(){
    // State
    const [projectInfo, setProjectInfo] = useState();
    const [categoryData, setCategoryData] = useState();

    //Hooks
    const { id } = useParams();
    // const navigate = useNavigate();

    // Check correct User is editing invention
    // const UserId = window.localStorage.getItem("id");
    // const isOwner = (UserId == projectInfo.owner)

    // if (!isOwner) {
    //     navigate(`/projects/`);
    // }

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

    }, [id]);

    if (!projectInfo) {
        return <h1>Loading...</h1>
    }


    return (
        <>
        <div className="editproject-form-wrapper">
            <div id="project-form">
                    <h1>Edit Your Invention ⚛︎</h1>
                    <EditProjectForm project={projectInfo} categories={categoryData}/>
            </div>
        
            <div className="categories">
                <h2>Select from the Following 14 Categories:</h2>
                <h3>Genius Categories:</h3>
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
        </div>
        </>
    );
}

export default EditProjectPage;