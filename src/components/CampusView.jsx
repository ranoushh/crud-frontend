import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { deleteCampusThunk } from "../redux/campuses/campuses.action";
import { deleteStudentThunk } from "../redux/students/students.action";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

const CampusView = (props) => {
  const [currentCampus, setCurrentCampus] = useState(undefined);
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  console.log(currentCampus);

  useEffect(() => {
    fetchCampus();
  }, []);

  const fetchCampus = async () => {
    try {
      const response = await axios.get(
        `https://crud-backend-alpha.vercel.app/api/campus/${id}`
      );
      console.log(response);
      setCurrentCampus(response.data);
      setStudents(response.data.Students);
      console.log(response.data.Students);
    } catch (error) {
      console.log(error);
    }
  };

  async function deleteStudent(id) {
    console.log("delete student button reached");
    await dispatch(deleteStudentThunk(id));
    await fetchCampus();
  }

  const renderAllStudent = () => {
    return students.map((student) => {
      return (
        <div key={student.id}>
          <div>
            <img src={student.imageurl} alt={student.firstname} />
          </div>
          <Link to={`/students/${student.id}`}>
            <h4>{student.firstname + " " + student.lastname}</h4>
          </Link>
          <button onClick={() => deleteStudent(student.id)} id="delete">
            X
          </button>
          <h5>{currentCampus.name}</h5>
        </div>
      );
    });
  };

  const dispatch = useDispatch();

  function deleteCampus(id) {
    console.log("button");
    dispatch(deleteCampusThunk(id));
  }

  return (
    <div>
      {currentCampus ? (
        <div>
          <div>
            <section>
              <img src={currentCampus.imageurl} alt={currentCampus.name} />
              <article>
                <h1>{currentCampus.name}</h1>
                <p>{currentCampus.description}</p>
              </article>
            </section>
            <address>{currentCampus.address}</address>
            <Link to={`/campuses`}>
              <button
                onClick={() => deleteCampus(currentCampus.id)}
                id="delete"
              >
                X
              </button>
            </Link>
            <Link to={`/campuses/editcampus/${currentCampus.id}`}>
              <button> Edit Campus</button>
            </Link>
          </div>
          <div>
            <div>
              <h1>Students on Campus</h1>
              <Link to={`/addStudents`}>
                <button>Add a Student</button>
              </Link>
            </div>
            {currentCampus.Students !== 0 ? (
              <div>{renderAllStudent()}</div>
            ) : (
              <div>
                <p>There are no students currently registered on this campus</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading Campus Data...</p>
      )}
    </div>
  );
};

export default CampusView;
