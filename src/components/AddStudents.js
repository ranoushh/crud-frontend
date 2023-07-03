import React, { useState } from "react";
import axios from "axios";
import { addNewStudentThunk } from "../redux/students/students.action";
import { useDispatch, useSelector } from "react-redux";

function AddStudents() {
  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();
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
    gpa: 0.0,
    CampusId: null,
  });

  function handleChange(event) {
    console.log(state);
    // console.log(event);
    //event.target.value;
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);

    const submitObj = {
      firstname: state.firstname,
      lastname: state.lastname,
      email: state.email,
      imageurl: state.imageurl,
      gpa: state.gpa,
      CampusId: state.CampusId,
    };
    console.log("my obj is:", submitObj);
    dispatch(addNewStudentThunk(submitObj));
  }

  return (
    <div>
      <h1>Add a New Student!</h1>
      <form>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstname"
            defaultValue={state.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
          ></input>
        </label>
        <br />
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastname"
            defaultValue={state.lastname}
            onChange={handleChange}
            placeholder="Enter Last Name"
          ></input>
        </label>
        <br />
        <label>
          E-Mail:{" "}
          <input
            type="text"
            name="email"
            defaultValue={state.email}
            onChange={handleChange}
            placeholder="Enter E-Mail Address"
          ></input>
        </label>
        <br />
        <label>
          Image URL:{" "}
          <input
            type="text"
            name="imageurl"
            defaultValue={state.imageurl}
            onChange={handleChange}
            placeholder="Enter Image URL"
          ></input>
        </label>
        <br />
        <label>
          GPA:{" "}
          <input
            type="number"
            name="gpa"
            max={4.0}
            min={0.0}
            step="0.01"
            defaultValue={state.gpa}
            onChange={handleChange}
            placeholder="Enter GPA"
          ></input>
        </label>
        <br />
        <label>
          Campus ID:{" "}
          <input
            type="number"
            name="CampusId"
            step="01"
            defaultValue={state.CampusId}
            onChange={handleChange}
            placeholder="Enter Campus ID"
          ></input>
        </label>
        <br />
      </form>
      <button type="submit" id="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddStudents;
