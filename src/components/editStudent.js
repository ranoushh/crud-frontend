import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editStudentThunk } from "../redux/students/students.action";
import axios from "axios";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditStudent = () => {
  const [currentStudent, setCurrentStudent] = useState(undefined);
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/student/${id}`
        );
        console.log(response);
        setCurrentStudent(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setCurrentStudent({
      ...currentStudent,
      [e.target.name]: e.target.value,
    });
    console.log(currentStudent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //prevents refreshing page when data is submitted in the form
    dispatch(editStudentThunk(currentStudent));
    //creates a load delay so frontend will display updated info from db
    const navigateDelay = () =>
      setTimeout(() => {
        navigate(`/students/${currentStudent.id}`);
      }, 250); // delay by 0.25 sec, so that the user don't get desperate

    navigateDelay();
  };

  const fetchAllCampuses = () => {
    console.log("RUNNING DISPATCH FROM fetchAllCampuses");
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    console.log("FETCH ALL Campuses FIRING IN USEEFFECT");
    fetchAllCampuses();
  }, []);

  const handleSelect = (event) => {
    console.log("THIS IS HANDLE SELECT AND THE EVENT PASSED IN", event);
    setCurrentStudent({
      ...currentStudent,
      CampusId: event.target.value,
    });
    console.log(currentStudent);
  };

  console.log("THIS IS ALLCAMPUSES", allCampuses);

  return (
    <div>
      <p className="form-note-p">
        To proceed, please ensure you have entered a valid first name, lastname,
        and email address.These fields are essential for us to assist you.
      </p>
      {currentStudent ? (
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={currentStudent.firstname}
            onChange={handleChange}
            required
            pattern="[A-Za-z ]+"
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={currentStudent.lastname}
            onChange={handleChange}
            required
            pattern="[A-Za-z ]+"
          />

          <label>E-Mail:</label>
          <input
            type="email"
            name="email"
            value={currentStudent.email}
            onChange={handleChange}
            required
          />

          <label>Image URL:</label>
          <input
            type="url"
            name="imageurl"
            value={currentStudent.imageurl}
            onChange={handleChange}
            placeholder="Enter a Valid Image URL"
          />

          <label>GPA:</label>

          <input
            type="number"
            name="gpa"
            value={currentStudent.gpa}
            onChange={handleChange}
            min={0}
            max={4}
            step={0.1}
          />
          {/*  It's similar, jsut that what if currentStudent.Campus is null? we will get an error, 
          so we make this solution*/}
          {currentStudent.Campus ? (
            <select onChange={handleSelect}>
              <option value={currentStudent.Campus.id}>
                {currentStudent.Campus.name}
              </option>
              {allCampuses.map((campus) => (
                <option value={campus.id} key={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          ) : (
            <select onChange={handleSelect}>
              <option value="">Select a campus</option>
              {allCampuses.map((campus) => (
                <option value={campus.id} key={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          )}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>Loading Campus Data...</div>
      )}
    </div>
  );
};

export default EditStudent;
