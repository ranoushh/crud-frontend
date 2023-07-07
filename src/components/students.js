import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudentsThunk,
  deleteStudentThunk,
  editStudentThunk,
} from "../redux/students/students.action";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";
import "../App.css";

export default function Students() {
  //allStudents accesses global state here to fetch all students in the db
  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();

  const fetchAllStudents = () => {
    console.log("RUNNING DISPATCH FROM fetchAllStudents");
    return dispatch(fetchAllStudentsThunk());
  };

  function deleteStudent(id) {
    console.log("delete student button reached");
    dispatch(deleteStudentThunk(id));
  }

  function editStudent(id) {
    console.log("delete student button reached");
    dispatch(editStudentThunk(id));
  }

  useEffect(() => {
    console.log("FETCH ALL STUDENTS FIRING IN USEEFFECT");
    //loads all students from db when the allStudents array is empty upon rendering
    fetchAllStudents();
  }, []);

  return (
    <div className="all-students-page">
      <h1>All Students</h1>

      <Link to="/addstudents">
        <button className="add-btn">Add a New Student</button>
      </Link>

      {allStudents.length > 0 ? (
        <div className="list-students-grid">
          {allStudents.map((student, index) => (
            <div key={index} className="card-wrapper">
              <div className="button-container">
                <button onClick={() => deleteStudent(student.id)} id="delete">
                  X
                </button>
              </div>
              <StudentCard
                imageUrl={student.imageurl}
                firstName={student.firstname}
                lastName={student.lastname}
                studentId={student.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No students registered.</p>
      )}
    </div>
  );
}
