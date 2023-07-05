import React from "react";
//import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const SingleStudent = (props) => {
  const [student, setStudent] = useState(undefined);
  const { id } = useParams();

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
          {student.CampusId !== null ? (
            <div>
              <img
                style={{ width: 350, height: 300 }}
                src={student.Campus.imageurl}
                alt=""
              />
              <h2>{student.Campus.name}</h2>
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
