import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import PledgeUser from "../components/ProjectPageComponents/PledgeUser/PledgeUser";
import ProjectOwner from "../components/ProjectPageComponents/ProjectOwner/ProjectOwner";

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

        // First attempt - didn't realise could use pledges stuff from below
        // .then(

        // fetch(`${process.env.REACT_APP_API_URL}pledges`)
        // .then((results) => {
        //     return results.json();
        // })
        // .then((data) => {
        //     setProjectPledgeAmount(data
        //         .filter (pledge => pledge.project_id == id)
        //         // '.reduce' is a JS aggregator that emulates '.sum'
        //         .reduce ((sum, pledge) => sum + pledge.amount, 0));
        // }));

    }, [id]);

    // Loading State
    // "Skeleton" Loading
    if (!projectData) {
        return <h3>Loading project...</h3>;
    }

    // Normal State
    return (
    <div>
        <h2>{projectData.title} - <ProjectOwner owner={projectData.owner} /></h2>
        <p>
            <ul>
                <li>Image Here {projectData.image}</li>
                <li>Description: {projectData.description}</li>
                <li>Fundraising Goal: ${projectData.goal}</li>
                <li>Open for Pledging Since: {projectData.date_created}</li>
                <li>Closing Date: {projectData.closing_date}</li>
            </ul>
        </p>

        <h3>Total Raised: ${projectPledgeAmount} Inventi-Cents!</h3>
        <h3>{projectData.is_open
        // '? :' are ternary oprators
            // '?' is if true
            // ':' is if false
            // what comes before the ? is the predicate aka 'what you write in the if statement'
            ? projectData.goal > projectPledgeAmount
                ? "Currently Accepting Pledges"
                : "We made a lot of money, pls gib moar tho"
            : "No Longer Accepting Pledges"}</h3>

        <h3>Pledges:</h3>
        <ul>
        {projectData.pledges.map((pledgeData, key) => {
            return (
                <PledgeUser amount={pledgeData.amount} supporter={pledgeData.supporter} comment={pledgeData.comment} />
            );
        })}
        </ul>
    </div>
    );
}

export default ProjectPage;