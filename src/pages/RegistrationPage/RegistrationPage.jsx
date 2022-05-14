import React from "react";

// Styles
import "./RegistrationPage.css";

// Components
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function RegistrationPage() {
    return (
        <>
        <div className="registration-container">
            <h1>Sign-Up ⚛︎</h1>
            <h3>Starting Sharing Your Brilliant (and Diabolical) Ideas!</h3>
        </div>
        <RegistrationForm />
        </>
    );
}

export default RegistrationPage;