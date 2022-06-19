import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Styles
import "./ProjectPage.css";

// Imports
import { Link } from "react-router-dom";

// Components
import PledgeUser from "../../components/ProjectPageComponents/PledgeUser/PledgeUser";
import ProjectOwner from "../../components/ProjectPageComponents/ProjectOwner/ProjectOwner";
import ProgressBar from "../../components/ProjectPageComponents/ProgressBar/ProgressBar";

function ProjectPage() {
    // State
    const [projectData, setProjectData] = useState();
    const [projectPledgeAmount, setProjectPledgeAmount] = useState();
    const [projectGoalPercentage, setGoalPercentage] = useState();
    const [isError, setIsError] = useState(false);

    // Hooks
    const { id } = useParams();

    // // Check Invention creator is LoggedIn
    // const userName = window.localStorage.getItem("username");
    // const isOwner = (userName === projectData.owner)

    // Check user is LoggedIn
    const token = window.localStorage.getItem("token");
    const isUserLoggedin = !(token === null || token === undefined || token === "undefined")

    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log(data)

            if (data.detail === 'Not found.') {
                setIsError(true)
            } else {
                setProjectData(data);
            
                const totalPledges = data.pledges
                    // eslint-disable-next-line eqeqeq
                    .filter (pledge => pledge.project_id == id)
                    // reducing your list to an output value
                    .reduce ((sum, pledge) => sum + pledge.amount, 0)
                setProjectPledgeAmount(totalPledges);
                
                const goalPercentage = ((totalPledges / data.goal) * 100).toFixed(2)
                setGoalPercentage(goalPercentage);
            }
        })
    }, [id]);

    // Loading State
    // "Skeleton" Loading
    if (!projectData) {
        return <h3>Loading Ivention...</h3>;
    }

    if (isError) {
        return <h3>Invention Doesn't Exist...</h3>;
    }

    // Normal State
    return (
    <div className="project-wrapper">
        <div className="project-title-and-owner">
            <h2>{projectData.title}</h2> 
            <h3>Invented by: <span><ProjectOwner owner={projectData.owner} /></span></h3>
            <h4>{new Date(projectData.date_created).toDateString()}</h4>
        </div>
        
        <div className="project-details">
                <img className="project-img" src={projectData.image} alt="project img"/>
                <h3 id="description">{projectData.description}</h3>
                <ul>
                    <li><span>Invention Category:</span> <br></br>{projectData.category}</li>
                    <li><span>Donation Goal:</span> <br></br>${projectData.goal}</li>
                    <li><span>Closing Date:</span> <br></br>{new Date(projectData.closing_date).toDateString()}</li>
                </ul>
        </div>

        <div className="pledges-total">
            <h3>Total <span role="img" aria-label="money">💰</span><span>Inventi-Cents</span><span role="img" aria-label="money">💰</span> Raised: <br></br><span>${projectPledgeAmount}</span></h3>
            
            <ProgressBar completed={projectGoalPercentage} bgcolor={"#14D020"} />
            
            <h3>{projectData.is_open
            // '? :' are ternary oprators
                // '?' is if true
                // ':' is if false
                // what comes before the ? is the predicate aka 'what you write in the if statement'
                ? projectData.goal > projectPledgeAmount
                    ? "Currently Accepting Inventi-Cents! 💰"
                    : "We made a lot of money, please give more though 👀"
                : "Invention has been built."}</h3>
            <br></br>
            <button className="pledge-btn"><Link to={`/pledges/${id}`}>Pledge Inventi-Cents Here!</Link></button>
        </div>

        <div className="pledges-amounts-comments">
            <h3>Donations:</h3>
            <ul>
            {projectData.pledges.map((pledgeData, key) => {
                return (
                    <PledgeUser 
                        key={`pledge-${pledgeData.id}`} 
                        amount={pledgeData.amount} 
                        supporter={pledgeData.supporter} 
                        comment={pledgeData.comment} 
                    />
                );
            })}
            </ul>
        </div>
        
        {(isUserLoggedin) &&
        <button className="edit-btn"><Link to={`/projects/edit-invention/${projectData.id}`}>Edit Your Invention</Link></button>}
    </div>
    );
}

export default ProjectPage;

// NOTES:

//  CHECK IF THAT ITEM IS IN LOCAL STORAGE
//  IF IT IS - THEN LET THEM PLEDGE
//  IF IT'S NOT IN THE LOCAL STORAGE, THEN LINK TO GO BACK TO THE LOGIN/SIGN UP