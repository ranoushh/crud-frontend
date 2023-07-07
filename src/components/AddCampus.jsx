import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCampusThunk,
  fetchAllCampuses,
} from "../redux/campuses/campuses.action";
import { useNavigate } from "react-router-dom";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";

function AddCampus() {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const [newCampus, setNewCampus] = useState({
    campusName: "",
    imageurl: "",
    address: "",
    description: "",
  });

  //below is accessing the campuses state in the store and accessing the allCampuses array
  // const allCampuses = useSelector((state) => state.campuses.allCampuses)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAllCampuses = () => {
    console.log("RUNNING DISPATCH FROM fetchAllCampuses");
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    console.log("FETCH ALL Campuses FIRING IN USEEFFECT");
    fetchAllCampuses();
  }, []);

  function handleChange(event) {
    setNewCampus({ ...newCampus, [event.target.name]: event.target.value });
    console.log(newCampus);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(newCampus);
    let submitObj = {};

    if (newCampus.imageurl !== "") {
      submitObj = {
        name: newCampus.campusName,
        address: newCampus.address,
        imageurl: newCampus.imageurl,
        description: newCampus.description,
      };
    } else {
      submitObj = {
        name: newCampus.campusName,
        address: newCampus.address,
        imageurl:
          "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", //default image
        description: newCampus.description,
      };
    }
    console.log("my obj is:", submitObj);

    const campusData = await dispatch(addNewCampusThunk(submitObj));
    navigate(`/campuses/${campusData.id}`);

    setNewCampus({
      campusName: "",
      imageurl:
        "https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", //default image
      address: "",
      description: "",
    });
  }

  return (
    <div>
      <h1>Add Campus:</h1>
      <p className="form-note-p">
        To proceed, please ensure you have entered a valid name and address.
        These fields are essential for us to assist you.
      </p>
      <form id="form" onSubmit={handleSubmit}>
        <label>College Name:</label>
        <input
          type="text"
          id="nameCollege"
          name="campusName"
          value={newCampus.campusName}
          onChange={handleChange}
          placeholder="Enter Campus Name"
          required
          pattern="[A-Za-z ]+"
        />
        <label>Image URL:</label>
        <input
          type="url"
          id="imageurl"
          name="imageurl"
          value={newCampus.imageurl}
          onChange={handleChange}
          placeholder="Enter a Valid Image URL"
        />
        <label>Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={newCampus.address}
          onChange={handleChange}
          placeholder="Enter Address"
          required
        />
        <label> Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newCampus.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
        <button id="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCampus;
