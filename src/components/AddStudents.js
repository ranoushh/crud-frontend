import React, { useState } from 'react';
import axios from 'axios';

function AddStudents() {
    // const [firstName, setfirstName] = useState('')
    // const [lastName, setlastName] = useState('')
    // const [email, setemail] = useState('')
    // const [imgURL, setimgURL] = useState('')
    // const [gpa, setgpa] = useState(0)

    //setting consts within state 
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        imageurl: "",
        gpa: 0.00,
        CampusId: null
    })

    function handleChange (event) {
        console.log(state);
        console.log(event)
        //event.target.value;
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    };

    function handleSubmit (event)  {
        // const submitObj = {
        //     firstname: state.firstname,
        //     lastName: state.lastName, 
        //     email: state.email, 
        //     imgURL: state.imgURL, 
        //     gpa: state.gpa
        // };
        //above no longer necessary b/c consts are all contained w/i state
       event.preventDefault();
        console.log(state)
       
        try {
            axios.post('http://localhost:8080/api/student/addStudent', {
                firstname: state.firstname,
                lastname: state.lastname,
                email: state.email,
                imageurl: state.imageurl,
                gpa: state.gpa,
                CampusId: state.CampusId
            })
            .then(response => {
                console.log(response.data);

                //clear form here after data is used 
                setState({
                    firstname: "",
                    lastname: "",
                    email: "",
                    imageurl: "",
                    gpa: "",
                    CampusId: ""
                });
            });
        } catch (error) {
            console.log(error);
        }


    };


  return (
    <div><h1>Add a New Student!</h1>
    <form >
        <label>
            First Name: <input type="text" 
            name="firstname"
            defaultValue={state.firstName} 
            onChange={handleChange} 
            placeholder="Enter First Name"></input>
        </label>
        <br />
        <label>
            Last Name: <input type="text"
            name="lastname" 
            defaultValue={state.lastname} 
            onChange={handleChange}
            placeholder="Enter Last Name">
            </input>
        </label>
        <br />
        <label>
            E-Mail:  <input type="text"
            name="email" 
            defaultValue={state.email} 
            onChange={handleChange}
            placeholder="Enter E-Mail Address">

            </input>
        </label>
        <br />
        <label>
            Image URL: <input type="text"
            name="imageurl" 
            defaultValue={state.imageurl} 
            onChange={handleChange}
            placeholder="Enter Image URL">

            </input>
        </label>
        <br />
        <label>
            GPA: <input type="number" 
            name="gpa"
            max={4.0}
            min={0.0}
            step="0.01" 
            defaultValue={state.gpa} 
            onChange={handleChange}
            placeholder="Enter GPA">

            </input>
        </label>
        <br />
        <label>
            Campus ID: <input type="number"
            name = "CampusId"
            step="01" 
            defaultValue={state.CampusId} 
            onChange={handleChange}
            placeholder="Enter Campus ID">
            </input>
        </label>
        <br />
    </form>
    <button
        type="submit"
        id="submit" 
        onClick={handleSubmit} 
        >Submit</button>
    </div>
  )
}

export default AddStudents;