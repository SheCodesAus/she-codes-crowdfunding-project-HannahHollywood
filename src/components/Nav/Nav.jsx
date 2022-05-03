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
                        <Link className="nav-links" to="/projects/">Inventions</Link>
                        <Link className="nav-links" to="/users/">Geniuses</Link>
                        <Link className="nav-links" to="/users/:id">Profile</Link>
                        <Link className="nav-links-mobile" to="/login">Login</Link>
                </ul>
                <Button className="nav-links-mobile"><Link to="/login">Login</Link></Button>
            </nav>
        )
    }
}

export default Nav