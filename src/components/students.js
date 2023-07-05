import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudentsThunk,
  deleteStudentThunk,
  editStudentThunk,
} from "../redux/students/students.action";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";

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
    <div>
      <h1
        style={{
          fontFamily: "georgia,garamond,serif",
          fontSize: "40px",
          fontStyle: "italic",
        }}
      >
        All Students
      </h1>

      <Link to="/addstudents">
        <button>Add a New Student</button>
      </Link>

      {allStudents.length > 0 ? (
        <ul>
          {allStudents.map((student, index) => (
            <li key={index}>

            <div>
                <StudentCard
                  imageUrl={student.imageurl}
                  firstName={student.firstname}
                  lastName={student.lastname}
                  studentId={student.id}
                />
              </div>
              <p>
              <button onClick={() => deleteStudent(student.id)} id= "delete"> X </button>
              {/* <Link to={`/students/editStudent/${student.id}`}>
                <button onClick={() => editStudent(student)} id= "edit"> Edit Student </button> </Link>  */}
              </p>

              

            </li>
          ))}
        </ul>
      ) : (
        <p>No students registered.</p>
      )}
    </div>
  );
}

// from line 45 :  <h4 style= {{fontFamily:'georgia,garamond,serif'}} >Student: {student.firstname} {student.lastname}

/*
 <p>
                <h4 style={{ fontFamily: "georgia,garamond,serif" }}>
                  Student: {student.firstname} {student.lastname}
                  <button onClick={() => deleteStudent(student.id)} id="delete">
                    {" "}
                    X{" "}
                  </button>
                  <button onClick={() => editStudent(student)} id="edit">
                    {" "}
                    Edit Student{" "}
                  </button>
                </h4>
              </p>
*/
