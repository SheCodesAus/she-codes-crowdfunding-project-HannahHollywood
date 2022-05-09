import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import EditProfileForm from "../../../components/EditProfileForm/EditProfileForm";

function EditProfilePage(){
    // State
    const [userData, setUserData] = useState();

    //Hooks
    const { id } = useParams();

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
    }, []);

    if (!userData) {
        return <h1>Loading...</h1>
    }


    return (
        <>
        <div className="editprofile-form-wrapper">
            <div id="editprofile-form">
                    <h1>Edit Your Your Profile ⚛︎</h1>
                    <EditProfileForm user={userData} />
            </div>
        </div>
        </>
    );
}

export default EditProfilePage;