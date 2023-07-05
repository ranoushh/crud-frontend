import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editCampusThunk } from "../redux/campuses/campuses.action";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditCampus = ({ campus }) => {
  const [currentCampus, setCurrentCampus] = useState(undefined);
  // const [updatedCampus, setUpdatedCampus] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/campus/${id}`
        );
        console.log(response);
        setCurrentCampus(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCampus(); //do we need this ?
  }, [id]);

  // const [formData, setFormData] = useState({
  //   // name: currentCampus.name,
  //   // imageurl: currentCampus.imageurl,
  //   // address: currentCampus.address,
  //   // description: currentCampus.description,
  // });

  function handleChange(e) {
    setCurrentCampus({
      ...currentCampus,
      [e.target.name]: e.target.value,
    });
    console.log(currentCampus);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //prevents refreshing page when data is submitted in the form
    // setUpdatedCampus(formData);
    dispatch(editCampusThunk(currentCampus));

    //this fucntion below it just, to delay the navigation to the page,
    //so that the update data can preview correcly in the single student view, cause if there is no delay
    //previous data will be shown for liek 5 sec then change to the new info, but with this delay,
    //the data qget there on time, and when we navigate it's already with the new inof
    const navigateDelay = () =>
      setTimeout(() => {
        navigate(`/campuses/${currentCampus.id}`);
      }, 250); // delay by 0.25 sec, so that the user don't get desperate

    navigateDelay();
  }

  // function handleEditCampus(id) {
  //   console.log("editing campus reached");
  //   dispatch(editCampusThunk(id, updatedCampus));
  // }

  return (
    <div>
      {currentCampus ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={currentCampus.name}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Image URL:
            <input
              type="text"
              name="imageurl"
              value={currentCampus.imageurl}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={currentCampus.address}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={currentCampus.description}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>Loading Campus Data...</div>
      )}
    </div>
  );
};

export default EditCampus;