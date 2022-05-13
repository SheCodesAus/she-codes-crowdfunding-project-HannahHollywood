import React from "react";

// Components
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <>
        <div className="login-wrapper">
        <h1> 
            <img id="logo-img" src={`${process.env.PUBLIC_URL}/assets/images/Logo-FundInator.png`} alt="logo"/>
        </h1>
            <h1>Login to the Fund-Inator ⚛︎</h1>
            <LoginForm />
        </div>
        </>
    );
}

export default LoginPage;