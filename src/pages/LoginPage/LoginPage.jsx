import React from "react";

// Styles
import './LoginPage.css';

// Components
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <>
        <div className="login-container">
            <h1>Login to the Fund-Inator ⚛︎</h1>
            <LoginForm />
        </div>
        </>
    );
}

export default LoginPage;