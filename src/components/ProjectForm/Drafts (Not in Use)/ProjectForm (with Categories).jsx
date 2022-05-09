import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

function ProjectForm() {

    //State
    const [project, setProject] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: "",
        date_created: "",
        category: "",
        closing_date:" ",
    });
    const navigate = useNavigate();

    //Actions and Helpers 
    //saves and updates the state
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };
    
    //check data exist and save to the backend
    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;
        

        if (project.title && project.description && project.goal && project.image && project.category && project.date_created && project.closing_date) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}projects/`, {
                    method:"post",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({
                        title: project.title,
                        description: project.description,
                        goal: parseInt(project.goal),
                        image: project.image,
                        is_open: project.is_open === "on",
                        date_created: new Date(project.date_created).toISOString(),
                        category: project.category,
                        closing_date: new Date(project.closing_date).toISOString(),
                    }),
                });
                const data = await res.json()
                console.log(data);

                navigate(`/project/${data.id}`);               
            }catch(err) {
                console.log(err);
            }
        }
        else {
            // User has not filled all fields
        }
    }

        //State
        const [categoryData, setCategoryData] = useState();
        const [formFields, setFormFields] = useState([]);

        //Actions and Helpers
        useEffect(() => {
            fetch(`${process.env.REACT_APP_API_URL}categories/`)
                .then((results) => {
                    return results.json();
                })
                .then((data) => {
                    setCategoryData(data);

                    const fields = [
                        {
                            id: "title",
                            label: "Title",
                            placeholder: "Enter Title",
                            type: "text",
                            options: [],
                        },
                        {
                            id: "description",
                            label: "Description",
                            placeholder: "Enter Description",
                            type: "text",
                            options: [],
                        },
                        {
                            id: "goal",
                            label: "Goal",
                            placeholder: "Enter Goal",
                            type: "text",
                            options: [],
                        },
                        {
                            id: "image",
                            label: "Image",
                            placeholder: "Enter Image",
                            type: "url",
                            options: [],
                        },
                            {
                            id: "is_open",
                            label: "Is open",
                            placeholder: "Tick if Project Open",
                            type: "checkbox",
                            options: [],
                        },
                        {
                            id: "date_created",
                            label: "Date created",
                            placeholder: "Enter Date",
                            type: "date",
                            options: [],
                        },
                        {
                            id: "category",
                            label: "Category",
                            placeholder: "Enter Category",
                            type: "select",
                            options: data
                        },
                        {
                            id: "closing_date",
                            label: "closing_date",
                            placeholder: "Enter Closing Date",
                            type: "date",
                            options: [],
                        },
                    ]
                setFormFields(fields)
                });
        }, []);
    if (!window.localStorage.getItem("token")) {
        return(
            <Link to="/login"> Please Login</Link>
        );
    }

    return ( 
        <div className="form">
        <form>
            {formFields.map((field, key) => {
                return (
                <div className="form-item" key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    {field.type === "select" 
                        ? <select className="form-item" name={field.id} id={field.id} onChange={handleChange}>
                            {field.options.map((selectOption, key) =>  {
                                return(
                                <option key={`${key}-${selectOption.id}`} value={selectOption.slug}>{selectOption.name}</option>
                                )
                            })}
                        </select>
                        : <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                        />
                    }
                </div>
                )
            })}
            <div className="form-item">
                <button type="submit" onClick={handleSubmit}>
                Post
            </button>
            </div>
        </form>
        </div>
    )
}

export default ProjectForm;