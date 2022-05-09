import React from "react";

// Components
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function RegistrationPage() {
    return (
        <>
        <div className="registration-wrapper">
            <h1>Sign-Up ⚛︎</h1>
            <h3>Starting Sharing Your Brilliant (and Diabolical) Ideas!</h3>
            <RegistrationForm />
        </div>
        </>
    );
}

export default RegistrationPage;