import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function PledgeForm(pledgeData) {
  // State
  const [pledge, postPledge] = useState(
    pledgeData.map
  );

  // Hooks
  const { id } = useParams();
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");
  const isUserLoggedin = !(token === null || token === undefined || token === "undefined")

  if (!isUserLoggedin) {
        navigate(`/login/`);
    }

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postPledge((PledgeData) => ({
      ...PledgeData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token")
    console.log("handleSubmit", pledge, token)
    
    // Is user logged in and have they put something in all fields?
    if (token && pledge.amount && pledge.comment) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}pledges/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
              amount: parseInt(pledge.amount), 
              comment: pledge.comment, 
              anonymous: true, 
              project_id: parseInt(id)
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/project/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

    return (
      <>
        <form>
          <div>
            <label htmlFor="amount">Enter Amount: </label>
            <input
              type="text"
              id="amount"
              placeholder="Enter amount"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Leave a Comment: </label>
            <input
              type="text"
              id="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
          </div>
          <button className="pledge-btn" type="submit" onClick={handleSubmit}>
            Donate
          </button>
        </form>
        </>
      );
}

export default PledgeForm;