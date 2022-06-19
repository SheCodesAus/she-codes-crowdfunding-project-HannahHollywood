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
            <h4>(You must be logged-in to Pledge!)</h4>
            <LoginForm />
        </div>
        </>
    );
}

export default LoginPage;