import "../style/SingleStudents.css";
import React from "react";
//import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  editStudentThunk,
  deleteStudentThunk,
} from "../redux/students/students.action";
import { useDispatch } from "react-redux";

const SingleStudent = (props) => {
  const [student, setStudent] = useState(undefined);
  const { id } = useParams();

  //console.log("id = ", id);
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentResults = await axios.get(
          `http://localhost:8080/api/student/${id}`
        );
        console.log(studentResults.data);
        setStudent(studentResults.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudent();
  }, [id]);

  const dispatch = useDispatch();

  function editStudent(student) {
    dispatch(editStudentThunk(student));
  }

  function deleteStudent(id) {
    console.log("button");
    dispatch(deleteStudentThunk(id));
  }

  return (
    <div>
      {student ? (
        <div className="single-student-page">
          <h1>{student.firstname + " " + student.lastname}</h1>
          <p>
            Email: <span>{student.email}</span>
          </p>
          <p>
            GPA: <span>{student.gpa}</span>
          </p>
          <img
            className="student-image"
            src={student.imageurl}
            alt={student.firstname}
          />
          <div className="button-container">
            <Link to={`/students/editStudent/${student.id}`}>
              <button
                onClick={() => editStudent(student)}
                id="edit"
                className="edit-btn"
              >
                Edit Student
              </button>
            </Link>
            <Link to={`/students`}>
              <button
                onClick={() => deleteStudent(student.id)}
                id="delete"
                className="delete-btn"
              >
                X
              </button>
            </Link>
          </div>
          {student.CampusId !== null ? (
            <div className="campus-info">
              <Link to={`/campuses/${student.CampusId}`}>
                <h2>{student.Campus.name}</h2>
              </Link>
              <p>{student.Campus.description}</p>
              <img
                className="campus-image"
                src={student.Campus.imageurl}
                alt=""
              />
            </div>
          ) : (
            <h1 className="not-enrolled">Not enrolled in a campus</h1>
          )}
        </div>
      ) : (
        <p>Loading Student Data...</p>
      )}
    </div>
  );
};

export default SingleStudent;
