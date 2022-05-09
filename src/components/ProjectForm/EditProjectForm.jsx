import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

function EditProjectForm(projectData) {
  // State
  const [editProject, setEditProject] = useState(
    projectData.map
  );

  console.log("------>", editProject)

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setEditProject((prevEditProject) => ({
      ...prevEditProject,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token")
    console.log("handleSubmit", editProject, token)
    if (!token)return;


    const updatedProject = {}
    if (projectData.title !== editProject.title) updatedProject.title = editProject.title
    if (projectData.description !== editProject.description) updatedProject.description = editProject.description
    if (projectData.goal !== editProject.goal) updatedProject.goal = parseInt(editProject.goal)
    if (projectData.image !== editProject.image) updatedProject.image = editProject.image
    if (projectData.is_open !== editProject.is_open) updatedProject.is_open = editProject.is_open
    if (projectData.date_created !== editProject.date_created) updatedProject.date_created = new Date(editProject.date_created).toISOString()
    if (projectData.category !== editProject.category) updatedProject.category = editProject.category
    if (projectData.closing_date !== editProject.closing_date) updatedProject.closing_date = new Date(editProject.closing_date).toISOString()

    
    // Is user logged in and have they put something in all fields?
    if (token && editProject.title && editProject.description && editProject.goal && editProject.image && editProject.is_open && editProject.date_created && editProject.category && editProject.closing_date) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}projects/${editProject.id}`,
          {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
              title: projectData.title, 
              description: projectData.description,
              goal: parseInt(projectData.goal),
              image: projectData.image,
              is_open: projectData.is_open === "on",
              date_created: new Date(projectData.date_created).toISOString(),
              category: projectData.category,
              closing_date: new Date(projectData.closing_date).toISOString()
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/project/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const formFields = [
    {
       id: "title",
       label: "Title",
       placeholder: "Enter title",
       type: "text",
    },
    {
        id: "description",
        label: "Description",
        placeholder: "Enter description",
        type: "text",
    },
    {
        id: "goal",
        label: "Goal",
        placeholder: "Enter goal",
        type: "text",
    },
    {
        id: "image",
        label: "Image",
        placeholder: "Enter image",
        type: "url",
    },
        {
       id: "is_open",
       label: "Is open",
       placeholder: "Enter if project open",
       type: "checkbox",
    },
    {
        id: "date_created",
        label: "Date created",
        placeholder: "Enter title",
        type: "date",
    },
    {
        id: "category",
        label: "Category",
        placeholder: "Select category",
        type: "select",
    },
    {
        id: "closing_date",
        label: "Closing date",
        placeholder: "Enter closing date",
        type: "date",
    },
]

    return ( 
        <form>
            {formFields.map((field, key) => {
                return (
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            <button type="submit" onClick={handleSubmit}>
                Post Project
            </button>
        </form>
    )
}

export default EditProjectForm;