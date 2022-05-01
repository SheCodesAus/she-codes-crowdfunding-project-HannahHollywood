import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function PledgeForm(pledgeData) {
  // State
  const [pledge, postPledge] = useState(
    pledgeData.map
  );

  // // Hooks
  const { id } = useParams();
  const navigate = useNavigate();

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
    if (pledge.username && pledge.password) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}pledges/${id}`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pledge),
          }
        );
        const data = await response.json();
        window.localStorage.setItem("token", data.token);
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

    return (
        <form>
          <div>
      
       {/* <div>
         You are submitting the following:
         <ul>
           {Object.entries(pledgeData).map(([amount, value]) => (
             <li key={amount}><strong>{amount}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div> */}


            <label htmlFor="amount">Enter Amount:</label>
            <input
              type="text"
              id="amount"
              placeholder="Enter amount"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Leave a Comment:</label>
            <input
              type="text"
              id="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Post Pledge
          </button>
        </form>
      );
}

export default PledgeForm;