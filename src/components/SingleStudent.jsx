import React from "react";
//import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { editStudentThunk } from "../redux/students/students.action";
import { useDispatch } from "react-redux";

const SingleStudent = (props) => {
  const [student, setStudent] = useState(undefined);
  const { id } = useParams();

  console.log("id = ", id);
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

  const dispatch= useDispatch();

  function editStudent(student){
    dispatch(editStudentThunk(student));
  }

  return (
    <div>
      {student ? (
        <div>
          <h1>Name: {student.firstname + " " + student.lastname}</h1>
          <p>gpa: {student.gpa}</p>
          <img
            style={{ width: 300, height: 300 }}
            src={student.imageurl}
            alt={student.firstname}
          />
          <p></p>
          <Link to={`/students/editStudent/${student.id}`}>
            <button onClick={() => editStudent(student)} id= "edit"> Edit Student </button> 
          </Link>
          {student.CampusId !== null ? (
            <div>
              <img
                style={{ width: 350, height: 300 }}
                src={student.Campus.imageurl}
                alt=""
              />
              <Link to = {`/campuses/${student.CampusId}`}><h2>{student.Campus.name}</h2></Link>
            </div>
            
          ) : (
            <h1>Not enrolled in a campus</h1>
          )}
        </div>
      ) : (
        <p>Loading Student Data...</p>
      )}
    </div>
  );
};

export default SingleStudent;
