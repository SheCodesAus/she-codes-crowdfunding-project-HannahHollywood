import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Components
import EditProfileForm from "../../../components/EditProfileForm/EditProfileForm";

// Styles
import "./EditProfilePage.css";

function EditProfilePage(){
    // State
    const [userData, setUserData] = useState();

    // Hooks
    const { id } = useParams();
    const navigate = useNavigate();

    const UserId = window.localStorage.getItem("id");
    const IsLoggedInUser = (UserId === id);

    if (!IsLoggedInUser) {
        navigate(`/users/${id}`);
    }

    // network in use effect
    useEffect(() => {

        // fetch user info
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((user) => {
        setUserData(user);
        });
    }, [id]);

    if (!userData) {
        return <h1>Loading...</h1>
    }


    return (
        <>
        <div className="edit-act-container">
            <div id="editprofile-form">
                    <h1>Edit Your Your Profile ⚛︎</h1>
            </div>
            <EditProfileForm user={userData} />
        </div>
        </>
    );
}

export default EditProfilePage;