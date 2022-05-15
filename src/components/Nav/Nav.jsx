// Imports
import React, { useState } from "react";
import { Button } from "./Button/Button";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "./Nav.css";

function Nav() {

    // Hamburger State
    const [isMenuExpanded, setMenuExpanded] = useState(false);

    // Navigation Links
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login/")
    }

    const navigateToProfile = () => {
        let id = window.localStorage.getItem("id")
        navigate(`users/${id}`)
    }

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

        const profileButton = <button className="nav-links" onClick={navigateToProfile}>Profile</button>;
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
    const closeMenu = () => {
        setMenuExpanded(false)
    }

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
                    <Link className="nav-links" to="/" onClick={() => closeMenu()}>Home</Link>
                    <Link className="nav-links" to="/projects/" onClick={() => closeMenu()}>Inventions</Link>
                    <Link className="nav-links" to="/users/" onClick={() => closeMenu()}>Geniuses</Link>
                    {profileLink(true)}
                    {/* <Link className="nav-links" to={`/users/${userData}`}>Profile</Link> */}
                    {/* <i className="nav-links">Profile</i> */}
                    {checkUser(false)}
            </ul>
            {checkUser(true)}
        </nav>
    )
};

export default Nav;