import React from "react";

function PledgeForm() {

    return (
        <form>
          <div>
            <label htmlFor="amount">Enter Amount:</label>
            <input
              type="text"
              id="amount"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label htmlFor="comment">Leave a Comment:</label>
            <input
              type="text"
              id="comment"
              placeholder="Comment"
            />
          </div>
          <button type="submit">
            Post Pledge
          </button>
        </form>
      );
}

export default PledgeForm;