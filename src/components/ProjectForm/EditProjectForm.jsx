import React, { useState } from "react";


// Imports
import { useNavigate, Link } from "react-router-dom";

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
        if (project.deadline !== editProjectInfo.deadline) updatedProject.deadline = new Date(editProjectInfo.deadline).toISOString()

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
                <label htmlFor="date_created">Date created:</label>
                <input
                    type="date"
                    id="date_created"
                    value={editProjectInfo.date_created}
                    onChange={handleChange}
                />
            </div>
            {/* <div className="form-item">
                <label htmlFor="category">Category:</label>
                <select name="category" id="category" defaultValue={editProjectInfo.category} onChange={handleChange}>
                    {categories.map((category, key) =>  {
                        return(
                        <option key={`${key}-${category.id}`} value={category.slug}>{category.name}</option>
                        )
                    })}
                </select>
            </div> */}
            <div className="form-item">
                <label htmlFor="deadline">Deadline:</label>
                <input
                    type="date"
                    id="deadline"
                    value={editProjectInfo.deadline}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
            <button type="submit" onClick={handleSubmit}>
                    Update Project
            </button>
            </div>
        </form>
        </div> 
        )
    }


export default EditProjectForm





// import React, { useState } from "react";

// // Imports
// import { useNavigate } from "react-router-dom";

// function EditProjectForm(projectData) {
//   // State
//   const [editProject, setEditProject] = useState(
//     projectData.map
//   );

//   console.log("------>", editProject)

//   // // Hooks
//   const navigate = useNavigate();

//   // Actions and Helpers
//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setEditProject((prevEditProject) => ({
//       ...prevEditProject,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const token = window.localStorage.getItem("token")
//     console.log("handleSubmit", editProject, token)


//     const updatedProject = {}
//     if (projectData.title !== editProject.title) updatedProject.title = editProject.title
//     if (projectData.description !== editProject.description) updatedProject.description = editProject.description
//     if (projectData.goal !== editProject.goal) updatedProject.goal = parseInt(editProject.goal)
//     if (projectData.image !== editProject.image) updatedProject.image = editProject.image
//     if (projectData.is_open !== editProject.is_open) updatedProject.is_open = editProject.is_open
//     if (projectData.date_created !== editProject.date_created) updatedProject.date_created = new Date(editProject.date_created).toISOString()
//     if (projectData.category !== editProject.category) updatedProject.category = editProject.category
//     if (projectData.closing_date !== editProject.closing_date) updatedProject.closing_date = new Date(editProject.closing_date).toISOString()

    
//     // Is user logged in and have they put something in all fields?
//     if (Object.keys(updatedProject).length > 0) {
//       try {
//         const response = await fetch(
//           `${process.env.REACT_APP_API_URL}projects/${projectData.id}`,
//           {
//             method: "put",
//             headers: {
//               "Content-Type": "application/json",
//               'Authorization': `Token ${token}`,
//             },
//             body: JSON.stringify({...updatedProject}),
//           }
//         );
//         const data = await response.json();
//         console.log(data)
//         // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
//         navigate(`/project/${projectData.id}`);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const formFields = [
//     {
//        id: "title",
//        label: "Title",
//        placeholder: "Enter Title",
//        type: "text",
//     },
//     {
//         id: "description",
//         label: "Description",
//         placeholder: "Enter Description",
//         type: "text",
//     },
//     {
//         id: "goal",
//         label: "Goal",
//         placeholder: "Enter Goal",
//         type: "text",
//     },
//     {
//         id: "image",
//         label: "Image",
//         placeholder: "Enter Image",
//         type: "url",
//     },
//         {
//        id: "is_open",
//        label: "Is open",
//        placeholder: "Enter if Project Open",
//        type: "checkbox",
//     },
//     {
//         id: "date_created",
//         label: "Date created",
//         placeholder: "Enter Title",
//         type: "date",
//     },
//     {
//         id: "category",
//         label: "Category",
//         placeholder: "Select Category",
//         type: "select",
//     },
//     {
//         id: "closing_date",
//         label: "Closing date",
//         placeholder: "Enter Closing Date",
//         type: "date",
//     },
// ]

//     return ( 
//         <form>
//             {formFields.map((field, key) => {
//                 return (
//                 <div key={`${key}-${field.id}`}>
//                     <label htmlFor={field.id}>
//                         {field.label}
//                     </label>
//                     <input
//                         type={field.type}
//                         id={field.id}
//                         placeholder={field.placeholder}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 )
//             })}
//             <button type="submit" onClick={handleSubmit}>
//                 Edit Project
//             </button>
//         </form>
//     )
// }

// export default EditProjectForm;