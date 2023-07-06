import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addNewCampusThunk } from "../redux/campuses/campuses.action";
import { useNavigate } from "react-router-dom";

function AddCampus() {
  const [newCampus, setNewCampus] = useState({
    campusName: "",
    imageurl: "",
    address: "",
    description: "",
  });
  //below is accessing the campuses state in the store and accessing the allCampuses array
  // const allCampuses = useSelector((state) => state.campuses.allCampuses)
  const dispatch = useDispatch();

  // //clear form - didnt work
  // function clear(){
  //     let element = document.getElementById("form");
  //     element.reset()
  // }

  function handleChange(event) {
    setNewCampus({ ...newCampus, [event.target.name]: event.target.value });
    console.log(newCampus);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newCampus);

    const submitObj = {
      name: newCampus.campusName,
      address: newCampus.address,
      imageurl: newCampus.imageurl,
      description: newCampus.description,
    };
    console.log("my obj is:", submitObj);
    dispatch(addNewCampusThunk(submitObj));

    setNewCampus({
      campusName: "",
      imageurl: "",
      address: "",
      description: "",
    });
  }
  // function handleSubmit(event) {
  //     console.log(newCampus);

  //     try {
  //         axios.post('http://localhost:8080/api/campus/addCampus', {
  //             name: newCampus.campusName,
  //             imageurl: newCampus.imageUrl,
  //             address: newCampus.address,
  //             description: newCampus.description
  //         })
  //         .then(response => {
  //             console.log(response.data);

  //             //clear form here after data is used
  //
  //         });
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  return (
    <div>
      <h1 style={{ fontFamily: "georgia,garamond,serif" }}>Add Campus:</h1>
      
      <h3>
      To proceed, please ensure you have entered a valid name and address.
      <br/>
       These fields are essential for us to assist you.
      </h3>
      <form id="form" onSubmit={handleSubmit}>
        <p></p>
        College Name:{" "}
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
        <p></p>
        Image URL:{" "}
        <input
          type="url"
          id="imageurl"
          name="imageurl"
          value={newCampus.imageurl}
          onChange={handleChange}
          placeholder="Enter a Valid Image URL"
        />
        <p></p>
        Address:{" "}
        <input
          type="text"
          id="address"
          name="address"
          value={newCampus.address}
          onChange={handleChange}
          placeholder="Enter Address"
          required
        />
        <p></p>
        Description:{" "}
        <input
          type="text"
          id="description"
          name="description"
          value={newCampus.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
        <p></p>
        <button id="submit">
        Submit
      </button>
      </form>

      <p></p>
      {/* <Link to= {`/campuses/${newCampus.id}`}> */}
      
      {/* </Link> */}
    </div>
  );
}

export default AddCampus;
