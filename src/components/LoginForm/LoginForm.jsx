import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import './LoginForm.css';

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

  // // THINKIFIC VERSION:
  // const postData = async () => {
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}users/authenticate/`,
  //     {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(credentials),
  //     }
  //   );
  //   return response.json();
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (credentials.username && credentials.password) {
  //     postData().then((response) => {
  //       window.localStorage.setItem("token", response.token);
      
  //     navigate(`/users/${data.id}`);
  //     } catch (err) {
  //      console.log(err);
  //     };
  //   }
  // };

// OTHER VERSION:
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
        window.localStorage.setItem("id", data.id);
        if (data.token===undefined) {
          console.log("invalid credentials")
          return (
            <>
            <h2>Incorrect Login Details</h2>
            <h2>Please Try Again</h2>
            </>
          );
          // Does not allow wrong user to Login, BUT need to fix message (currently not showing)
        }
        else {
        navigate(`/users/${data.id}`);
      }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button className="login-page-btns" type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>

    <div className="sign-up-section">
      <h3>Don't have an account?</h3>
      <p>Sign up Below <span role="img" aria-label="Pointing Down">👇</span></p>
      <button className="login-page-btns"><Link to="/users/register/">Create Account</Link></button>
    </div>
    </>
  );
}

export default LoginForm;