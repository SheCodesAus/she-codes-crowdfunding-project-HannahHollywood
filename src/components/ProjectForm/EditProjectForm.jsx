import React, { useState } from "react";


// Imports
import { useNavigate } from "react-router-dom";

function EditProjectForm({project, categories}) {
  // State
    const [editProjectInfo, setEditProjectInfo] = useState(project);


    console.log("------>", editProjectInfo)

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditProjectInfo((prevEditProjectInfo) => ({
            ...prevEditProjectInfo,
            [id]: value,
        }));
    };

    const navigate = useNavigate();


    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        const updatedProject = {}
        if (project.title !== editProjectInfo.title) updatedProject.title = editProjectInfo.title
        if (project.description !== editProjectInfo.description) updatedProject.description = editProjectInfo.description
        if (project.goal !== editProjectInfo.goal) updatedProject.goal = parseInt(editProjectInfo.goal)
        if (project.image !== editProjectInfo.image) updatedProject.image = editProjectInfo.image
        if (project.category !== editProjectInfo.category) updatedProject.category = editProjectInfo.category
        if (project.date_created !== editProjectInfo.date_created) updatedProject.date_created = new Date(editProjectInfo.date_created).toISOString()
        if (project.closing_date !== editProjectInfo.closing_date) updatedProject.closing_date = new Date(editProjectInfo.closing_date).toISOString()

        if (Object.keys(updatedProject).length > 0) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}projects/${project.id}`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedProject}),
                });
                const data = await res.json()
                console.log(data);

                navigate(`/project/${project.id}`);               
            }catch(err) {
                console.log(err);
            }
        }
    }


    return (
        <div className="form">
        <form>
            <div className="form-item">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={editProjectInfo.title}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={editProjectInfo.description}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="goal">Goal:</label>
                <input
                    type="number"
                    id="goal"
                    value={editProjectInfo.goal}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="image">Image:</label>
                <input
                    type="url"
                    id="image"
                    value={editProjectInfo.image}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="is_open">Open:</label>
                <input
                    type="checkbox"
                    id="is_open"
                    value={editProjectInfo.is_open}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="date_created">Date Created:</label>
                <input
                    type="date"
                    id="date_created"
                    value={editProjectInfo.date_created}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="category">Update Category:</label>
                <input
                    type="select"
                    id="category"
                    value={editProjectInfo.category}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="closing_date">Closing Date:</label>
                <input
                    type="date"
                    id="closing_date"
                    value={editProjectInfo.closing_date}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
            <button type="submit" onClick={handleSubmit}>
            Update Invention
            </button>
            </div>
        </form>
        </div> 
        )
    }


export default EditProjectForm