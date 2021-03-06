import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

// Styles
import './ProjectForms.css';

function ProjectForm(projectData) {
  // State
  const [project, postProject] = useState(
    projectData.map
  );

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postProject((prevProjectData) => ({
      ...prevProjectData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token")
    console.log("handleSubmit", project, token)
    
    // Is user logged in and have they put something in all fields?
    if (token && project.title && project.description && project.goal && project.image && project.is_open && project.date_created && project.category && project.closing_date) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}projects/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
              title: project.title, 
              description: project.description,
              goal: parseInt(project.goal),
              image: project.image,
              is_open: project.is_open === "on",
              date_created: new Date(project.date_created).toISOString(),
              category: project.category,
              closing_date: new Date(project.closing_date).toISOString()
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
       label: "Title: ",
       placeholder: "Enter Title",
       type: "text",
    },
    {
        id: "description",
        label: "Description: ",
        placeholder: "Enter Description",
        type: "text",
    },
    {
        id: "goal",
        label: "Goal: ",
        placeholder: "Enter Goal",
        type: "text",
    },
    {
        id: "image",
        label: "Image: ",
        placeholder: "Enter Image",
        type: "url",
    },
        {
       id: "is_open",
       label: "Open: ",
       placeholder: "Enter if Project Open",
       type: "checkbox",
    },
    {
        id: "date_created",
        label: "Date Created: ",
        placeholder: "Select Date",
        type: "date",
    },
    {
        id: "category",
        label: "Category: ",
        placeholder: "Enter category",
        type: "text",
    },
    {
        id: "closing_date",
        label: "Closing Date: ",
        placeholder: "Select Closing Date",
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
            <button className="post-project-btn" type="submit" onClick={handleSubmit}>
            Post Invention
            </button>
        </form>
    )
}

export default ProjectForm;