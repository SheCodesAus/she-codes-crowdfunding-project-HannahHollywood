import React, { useState } from "react";


// Imports
import { useNavigate } from "react-router-dom";

function EditProfileForm({user}) {
  // State
    const [editUserInfo, setEditUserInfo] = useState(user);


    console.log("------>", editUserInfo)

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditUserInfo((prevEditUserInfo) => ({
            ...prevEditUserInfo,
            [id]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        const updatedUser = {}
        if (user.username !== editUserInfo.username) updatedUser.username = editUserInfo.username
        if (user.email !== editUserInfo.email) updatedUser.email = editUserInfo.email
        if (user.avatar !== editUserInfo.avatar) updatedUser.avatar = editUserInfo.avatar
        if (user.bio !== editUserInfo.bio) updatedUser.bio = editUserInfo.bio
        if (user.website !== editUserInfo.website) updatedUser.website = editUserInfo.website

        if (Object.keys(updatedUser).length > 0) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}users/${user.id}/`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedUser}),
                });
                const data = await res.json()
                console.log(data);

                navigate(`/users/${user.id}/`);               
            } catch(err) {
                console.log(err);
            }
        }
    }


    return (
        <div className="form">
        <form>
            <div className="form-item">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={editUserInfo.username}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={editUserInfo.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="avatar">Avatar:</label>
                <input
                    type="url"
                    id="avatar"
                    value={editUserInfo.avatar}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="bio">Bio:</label>
                <input
                    type="text"
                    id="bio"
                    value={editUserInfo.bio}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="website">Website:</label>
                <input
                    type="url"
                    id="website"
                    value={editUserInfo.website}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
              <button type="submit" onClick={handleSubmit}>
              Update Profile
            </button>
            </div>
        </form>
        </div> 
        )
    }


export default EditProfileForm;