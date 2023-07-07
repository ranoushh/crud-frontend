import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editCampusThunk } from "../redux/campuses/campuses.action";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  editStudentThunk,
  fetchAllStudentsThunk,
} from "../redux/students/students.action";

const EditCampus = () => {
  const [currentCampus, setCurrentCampus] = useState(undefined);
  const allStudents = useSelector((state) =>
    state.students.allStudents.filter(
      (allStudents) => allStudents.CampusId === null
    )
  );

  let updatedStudent = {};

  console.log("filtered?" + allStudents);
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

  function handleChange(e) {
    setCurrentCampus({
      ...currentCampus,
      [e.target.name]: e.target.value,
    });
    console.log(currentCampus);
  }

  //handleSelect takes studentId(e.target.value) and we want to go through our array and find the student with this id,
  //then we set the campusId field for that student = to the campus we are editing
  //send it to our thunk
  function handleSelect(studentId) {
    console.log("student select reached");
    updatedStudent = {
      ...allStudents.find((student) => student.id === parseInt(studentId)),
      CampusId: currentCampus.id,
    };
    console.log(currentCampus);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //prevents refreshing page when data is submitted in the form
    // setUpdatedCampus(formData);
    dispatch(editCampusThunk(currentCampus));
    dispatch(editStudentThunk(updatedStudent));

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

  const fetchAllStudents = () => {
    console.log("RUNNING DISPATCH FROM fetchAllStudents");
    return dispatch(fetchAllStudentsThunk());
  };

  useEffect(() => {
    console.log("FETCH ALL STUDENTS FIRING IN USEEFFECT");
    //loads all students from db when the allStudents array is empty upon rendering
    fetchAllStudents();
  }, []);

  return (
    <div>
      {currentCampus ? (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={currentCampus.name}
            onChange={handleChange}
            pattern="[A-Za-z ]+"
            required
          />
          <label>Image URL:</label>
          <input
            type="url"
            name="imageurl"
            value={currentCampus.imageurl}
            onChange={handleChange}
            placeholder="Enter a Valid Image URL"
          />

          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={currentCampus.address}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={currentCampus.description}
            onChange={handleChange}
          />
          <div>
            {/* e.target.value is our selected student's id: we pass it to handleSelect*/}
            <select
              id="selectStudent"
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option value="">Select Student</option>
              {allStudents.map((student) => (
                <option value={student.id} key={student.id}>
                  {student.firstname + " " + student.lastname}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>Loading Campus Data...</div>
      )}
    </div>
  );
};

export default EditCampus;
