// Imports
import React, { useState, useEffect } from "react";
import { Button } from "./Button/Button";
import { Link, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

// Styles
import "./Nav.css";

function Nav() {

    // Hamburger State
    const [isMenuExpanded, setMenuExpanded] = useState(false);

    // Below: Attempting to get 'Profile' Link to work...
    const [userData, setUserData] = useState();

    // Hooks
    // const { id } = useParams();

    // Actions & Helpers
    // Below: Attempting to get 'Profile' Link to work...
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${userData}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        })
    }, []);


    // Navigation Links
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login/")
    }

    // const navigateToProfile = () => {
    //     navigate(`users/${userData}`)
    // }

    const navigateToSignUp = () => {
        navigate("users/register")
    }

    // Handlers and Auth Checks
    const handleSignOut = () => {
        // It is assumed that a token belongs to a user who is logged in
        // so to sign a user out we will remove these from local storage
        window.localStorage.removeItem("token");

        // Make sure we navigate back to login page
        navigateToLogin()
    }

    //check if user has token and change nav
    const checkUser = (isBurgerMenu) => {
        // Get the user token. The !! ensure that the token "string" or undefined becomes true or false
        const isUserLoggedIn = window.localStorage.getItem("token");
        // console.log("isuserloggedin", isUserLoggedIn)

        const className = "nav-links-mobile";

        const loginButton = <Button className={className} onClick={navigateToLogin}>Login</Button>;
        const signOutButton = <Button className={className} onClick={handleSignOut}>Sign Out</Button>;

        const loginLink = <button className={className} onClick={handleSignOut}>Login</button>;
        const signOutLink = <button className={className} onClick={handleSignOut}>Sign Out</button>

        // This is a ternary operation
        //      Conditon ? True : false
        // Example: we check is the user logged in (yes => show sign out) (no => show login)
        if (isBurgerMenu) {
            return isUserLoggedIn 
                ? signOutButton
                : loginButton
        } else {
            return isUserLoggedIn 
                ? signOutLink
                : loginLink
        }   
    }

    const profileLink = (profileLinkVisible) => {
        const authenticatedUser = window.localStorage.getItem("token");

        const profileButton = <i className="profile-link">Profile</i>;
        const signUpButton = <button className="nav-links" onClick={navigateToSignUp}>Sign Up</button>;

        if (profileLinkVisible) {
            return authenticatedUser
                ? profileButton
                : signUpButton
        }
    }

    // Hamburger Handlers
    const handleClick = () => {
        setMenuExpanded(!isMenuExpanded)
    };

    return(
        <nav className="navbar-items">
            <Link className="navbar-logo" to="/"><h1>The <span>Fund</span>-Inator! <i className="fa fa-robot"></i></h1></Link>
            
            <div className="menu-icon" onClick={handleClick}>
                <li className={
                    // Hamburger Menu
                    isMenuExpanded 
                    ? 'fas fa-times' 
                    : 'fas fa-bars'}>
                </li>
            </div>

            <ul className={
                isMenuExpanded 
                ? 'nav-menu active' 
                : 'nav-menu'}>
                    <Link className="nav-links" to="/">Home</Link>
                    <Link className="nav-links" to="/projects/">Inventions</Link>
                    <Link className="nav-links" to="/users/">Geniuses</Link>
                    {profileLink(true)}
                    {/* <i className="nav-links">Profile</i> */}
                    {checkUser(false)}
            </ul>
            {checkUser(true)}
        </nav>
    )
};

export default Nav;