import React from "react";

// Styles
import './Footer.css';

function Footer() {
    return (
        <>
        <footer className="footerbottom-container">
            <p className="footer-text"> © 2022</p>
        
        <img id="logo-img" 
             src={`${process.env.PUBLIC_URL}/assets/images/Logo-FundInator.png`} 
             alt="logo"/>
        </footer>
        </>
    );
}
    
export default Footer;