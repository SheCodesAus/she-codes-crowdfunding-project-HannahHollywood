import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

//   THINKIFIC VERSION:
//   const postData = async () => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}api-token-auth/`,
//       {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       }
//     );
//     return response.json();
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (credentials.username && credentials.password) {
//       postData().then((response) => {
//         window.localStorage.setItem("token", response.token);
//       });
//     }
//   };

// ALEX'S VERSION:
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}users/authenticate/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        const data = await response.json();
        console.log(data)
        window.localStorage.setItem("token", data.token);
        
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/users/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      <br></br>
    
    <br></br>
    <div>
      <h3>Don't have an account?</h3>
      <p>Sign up Below <span role="img" aria-label="Pointing Down">👇</span></p>
      <button><Link to="/users/register/">Create Account</Link></button>
    </div>

    </form>
  );
}

export default LoginForm;