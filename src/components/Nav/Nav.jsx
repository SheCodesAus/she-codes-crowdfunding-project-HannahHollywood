// Imports
import React, { useState } from "react";
import { Button } from "./Button/Button";
import { Link } from "react-router-dom";

// Styles
import "./Nav.css";

function Nav() {
    // TODO: fix authentication for Login/SignUp Button
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = window.localStorage.getItem("token")

        // const handleChange = (event) => {
        //     const { id, value } = event.target;
        //     setIsLoggedIn((isLoggedIn) => ({
        //       ...isLoggedIn,
        //       [id]: value,
        //     }));
        //   };

        return !!token

    });

    // Hamburger State
    const [isMenuExpanded, setMenuExpanded] = useState(false);

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
                    <i className="nav-links">Comments</i>
                    {isLoggedIn
                        ? <Link className="nav-links-mobile" to="/login">Login/Sign Up</Link>
                        : setIsLoggedIn
                        // : <Link className="nav-links" to="/users/:id">Profile</Link>
                    }
            </ul>
            {isLoggedIn
                ? <Button className="nav-links-mobile"><Link to="/login">Login/Sign Up</Link></Button>
                : setIsLoggedIn
            }
        </nav>
    )
};

export default Nav;