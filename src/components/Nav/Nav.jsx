// Imports
import React, { useState } from "react";
import { Button } from "./Button/Button";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "./Nav.css";

function Nav() {

    // Hamburger State
    const [isMenuExpanded, setMenuExpanded] = useState(false);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login/")
    }

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
        const isUserLoggedIn = !!window.localStorage.getItem("token");
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

    // Hamburger Handlers
    const handleClick = () => {
        setMenuExpanded(!isMenuExpanded)
    };

    return(
        <nav className="NavbarItems">
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
                    <i className="nav-links">Profile</i>
                    {checkUser(false)}
                    {/* {isLoggedIn
                        ? <Link className="nav-links-mobile" to="/login">Login/Sign Up</Link>
                        : ""
                    } */}
            </ul>
            {checkUser(true)}
            {/* {isLoggedIn
                ? <Button className="nav-links-mobile"><Link to="/login">Login/Sign Up</Link></Button>
                : ""
            } */}
        </nav>
    )
};

export default Nav;