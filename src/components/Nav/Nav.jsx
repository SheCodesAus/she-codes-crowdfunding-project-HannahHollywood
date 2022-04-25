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
                <h1 className="navbar-logo">The <span>Fund</span>-Inator!👩‍🔬</h1>
                
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
                        <i className="nav-links">Inspiration Feed</i>
                        <i className="nav-links">Inventors</i>
                        <i className="nav-links">Inventions</i>
                        <i className="nav-links">Profile</i>
                </ul>
                <Button><Link to="/login">Login/Sign Up</Link></Button>
            </nav>
        )
    }
}

export default Nav