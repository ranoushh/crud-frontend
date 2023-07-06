import React, { useState, useEffect } from "react";
import axios from "axios";
import { addNewStudentThunk } from "../redux/students/students.action";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";

function AddStudents() {
  const allStudents = useSelector((state) => state.students.allStudents);
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();

  const fetchAllCampuses = () => {
    console.log("RUNNING DISPATCH FROM fetchAllCampuses");
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    console.log("FETCH ALL Campuses FIRING IN USEEFFECT");
    fetchAllCampuses();
  }, []);

  console.log("THIS IS ALLCAMPUSES", allCampuses);

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
    //changed state tom prevState below to prevent an infinite loop of setState
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSelect(event) {
    console.log("THIS IS HANDLE SELECT AND THE EVENT PASSED IN", event);
    setState({
      ...state,
      CampusId: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);
    let submitObj = {};

    if (state.imageurl !== "") {
      submitObj = {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        imageurl: state.imageurl,
        gpa: state.gpa,
        CampusId: state.CampusId,
      };
    } else {
      submitObj = {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        imageurl:
          "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        gpa: state.gpa,
        CampusId: state.CampusId,
      };
    }

    console.log("my obj is:", submitObj);
    dispatch(addNewStudentThunk(submitObj));

    setState({
      firstname: "",
      lastname: "",
      email: "",
      imageurl: "",
      gpa: 0.0,
      CampusId: null,
    });
  }

  return (
    <div>
      <h1 style={{ fontFamily: "georgia,garamond,serif" }}>
        Add a New Student!
      </h1>
      <p />
      <h3>
      To proceed, please ensure you have entered a valid first name, last name, and email address.
      <br/>
       These fields are essential for us to assist you.
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
            pattern="[A-Za-z ]+" 
          ></input>
        </label>
        <br />
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastname"
            value={state.lastname}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
            pattern="[A-Za-z ]+" 
          ></input>
        </label>
        <br />
        <label>
          E-Mail:{" "}
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Enter E-Mail Address"
            required
          ></input>
        </label>
        <br />
        <label>
          Image URL:{" "}
          <input
            type="url"
            name="imageurl"
            value={state.imageurl}
            onChange={handleChange}
            placeholder="Enter a Valid Image URL"
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
            value={state.gpa}
            onChange={handleChange}
            placeholder="Enter GPA"
          ></input>
        </label>
        <br />
        <select onChange={handleSelect}>
          <option value="">Select a campus</option>
          {allCampuses.map((campus) => (
            <option value={campus.id} key={campus.id}>
              {campus.name}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" id="submit" >
        Submit
      </button>
      </form>
     
    </div>
  );
}

export default AddStudents;
