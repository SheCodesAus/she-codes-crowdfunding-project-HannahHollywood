// import { computeHeadingLevel } from "@testing-library/react";

// Imports
import React, { Component } from "react";
import { Button } from "./Button/Button";
import { Link } from "react-router-dom";

// Styles
import "./Nav.css";

class Nav extends Component {
    // Hamburger State
    state = { clicked: false }

    // Hamburger Handlers
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <Link className="navbar-logo" to="/"><h1>The <span>Fund</span>-Inator! <i className="fa fa-robot"></i></h1></Link>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <li className={
                        // Hamburger Menu
                        this.state.clicked 
                        ? 'fas fa-times' 
                        : 'fas fa-bars'}>
                    </li>
                </div>

                <ul className={
                    this.state.clicked 
                    ? 'nav-menu active' 
                    : 'nav-menu'}>
                        <Link className="nav-links" to="/">Home</Link>
                        <i className="nav-links">Inventions</i>
                        <i className="nav-links">Geniuses</i>
                        <i className="nav-links">Profile</i>
                        <Link className="nav-links-mobile" to="/login">Login/Sign Up</Link>
                </ul>
                <Button className="nav-links-mobile"><Link to="/login">Login/Sign Up</Link></Button>
            </nav>
        )
    }
}

export default Nav