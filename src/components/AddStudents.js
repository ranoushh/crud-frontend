import React, { useState } from 'react'

function AddStudents() {
    // const [firstName, setfirstName] = useState('')
    // const [lastName, setlastName] = useState('')
    // const [email, setemail] = useState('')
    // const [imgURL, setimgURL] = useState('')
    // const [gpa, setgpa] = useState(0)

    //setting consts within state 
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        imgURL: "",
        gpa: 0.00,
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value,
        })
    };

    const handleSubmit = () => {
        // const submitObj = {
        //     firstName: state.firstName,
        //     lastName: state.lastName, 
        //     email: state.email, 
        //     imgURL: state.imgURL, 
        //     gpa: state.gpa
        // };
        //above no longer necessary b/c consts are all contained w/i state

        //event.preventDefault(); does not work, have not figured out how to FIX IT
        //event.preventDefault();
        console.log(state)
    };


  return (
    <div><h1>Add a New Student!</h1>
    <form onSubmit={handleSubmit}>
        <label>
            First Name: 
        <input type="text" defaultValue={state.firstName} onChange={handleChange} ></input>
        </label>
        <br />
        <label>
            Last Name: 
        <input type="text" defaultValue={state.lastName} onChange={handleChange}></input>
        </label>
        <br />
        <label>
            E-Mail: 
        <input type="text" defaultValue={state.email} onChange={handleChange}></input>
        </label>
        <br />
        <label>
            Image URL: 
        <input type="text" defaultValue={state.imgURL} onChange={handleChange}></input>
        </label>
        <br />
        <label>
            GPA: 
        <input type="number" step="0.01" defaultValue={state.gpa} onChange={handleChange}></input>
        </label>
        <br />
        <input onSubmit={handleSubmit} type="submit" value="Submit!!!!"></input>
    </form>
    </div>
  )
}

export default AddStudents;