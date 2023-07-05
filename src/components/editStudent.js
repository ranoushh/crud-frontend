import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editStudentThunk } from "../redux/students/students.action";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditStudent = () => {
    const [currentStudent, setCurrentStudent] = useState(undefined);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstname: student.firstname,
//     lastname: student.lastname,
//     email: student.email,
//     gpa: student.gpa,
//   });

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

  return (
    <div>
  {currentStudent?(  <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstname"
          value={currentStudent.firstname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={currentStudent.lastname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        E-Mail:
        <input
          type="text"
          name="email"
          value={currentStudent.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="imageurl"
          value={currentStudent.imageurl}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        GPA:
        <input
          type="text"
          name="gpa"
          value={currentStudent.gpa}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>):(
        <div>Loading Campus Data...</div>
    )}
    </div>
  );
};

export default EditStudent;