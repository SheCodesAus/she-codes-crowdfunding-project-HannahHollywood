import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Styles
import "./ProjectPage.css";

// Components
import PledgeUser from "../../components/ProjectPageComponents/PledgeUser/PledgeUser";
import ProjectOwner from "../../components/ProjectPageComponents/ProjectOwner/ProjectOwner";
// import ProgressBar from "../../components/ProjectPageComponents/ProgressBar/ProgressBar";

function ProjectPage() {
    // State
    const [projectData, setProjectData] = useState();
    const [projectPledgeAmount, setProjectPledgeAmount] = useState();
    
    // Hooks
    const { id } = useParams();
    
    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
            setProjectPledgeAmount(data.pledges
                // eslint-disable-next-line eqeqeq
                .filter (pledge => pledge.project_id == id)
                // reducing your list to an output value
                .reduce ((sum, pledge) => sum + pledge.amount, 0));
        })
    }, [id]);

    // Loading State
    // "Skeleton" Loading
    if (!projectData) {
        return <h3>Loading project...</h3>;
    }

    // Normal State
    return (
    <div className="project-wrapper">
        <div id="project-title-and-owner">
            <h2>{projectData.title}</h2> 
            <h3>Invented by: <ProjectOwner owner={projectData.owner} /> on {projectData.date_created}</h3>
        </div>
        
        <div className="project-details">
            <p>
                <img className="project-img" src={projectData.image} alt="project img"/>
                <ul>
                    <li>Description: {projectData.description}</li>
                    <li>Invention Type: {projectData.category}</li>
                    <li>Fundraising Goal: ${projectData.goal}</li>
                    <li>Closing Date: {projectData.closing_date}</li>
                </ul>
            </p>
        </div>

        <div className="pledges-total">
            <h3>Total Raised: ${projectPledgeAmount} Inventi-Cents!</h3>
            <h3>{projectData.is_open
            // '? :' are ternary oprators
                // '?' is if true
                // ':' is if false
                // what comes before the ? is the predicate aka 'what you write in the if statement'
                ? projectData.goal > projectPledgeAmount
                    ? "Currently Accepting Pledges"
                    : "We made a lot of money, please give more though 👀"
                : "Invention has been built."}</h3>
        </div>

        <div className="pledges-amounts-comments">
            <h3>Pledges:</h3>
            <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <PledgeUser amount={pledgeData.amount} supporter={pledgeData.supporter} comment={pledgeData.comment} />
                );
            })}
            </ul>
        </div>
    </div>
    );
}

export default ProjectPage;

// NOTES:

//  CHECK IF THAT ITEM IS IN LOCAL STORAGE
//  IF IT IS - THEN LET THEM PLEDGE
//  IF IT'S NOT IN THE LOCAL STORAGE, THEN LINK TO GO BACK TO THE LOGIN/SIGN UP