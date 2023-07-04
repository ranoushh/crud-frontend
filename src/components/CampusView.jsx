import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { deleteCampusThunk, editCampusThunk } from "../redux/campuses/campuses.action";
import { editCampus } from "../redux/campuses/campuses.action";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  const [currentCampus, setCurrentCampus] = useState(undefined);
  const { id } = useParams();
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

    fetchCampus();
  }, [id]);

  const renderAllStudent = () => {
    return currentCampus.Students.map((student) => {
      return (
        <div key={student.id}>
          <div>
            <img src={student.imageurl} alt={student.firstname} />
          </div>
          <h4>{student.firstname + " " + student.lastname}</h4>
          <h5>{currentCampus.name}</h5>
        </div>
      );
    });
  };

  const dispatch = useDispatch();

  function editCampus(id) {
    console.log("button");
    dispatch(editCampusThunk(id));
  };

  function deleteCampus(id) {
    console.log("button");
    dispatch(deleteCampusThunk(id));
  };

  return (
    <div>
      {currentCampus ? (
        <div>
          <div>
            <section>
              <img src={currentCampus.imageurl} alt={currentCampus.name} />
              <article>
                <h1>
                  {currentCampus.name} <span>{currentCampus.id}</span>{" "}
                </h1>
                <p>{currentCampus.description}</p>
              </article>
            </section>
            <address>{currentCampus.address}</address>
            <button onClick={() => deleteCampus(currentCampus.id)} id="delete"> x</button> 
            <Link to= {`/campuses/${currentCampus.id}/editcampus`} >
              <button> Edit Campus</button>
            </Link> 
          </div>
          <div>
            <div>
              <h1>Students on Campus</h1>
              <button>Add a Student</button>
            </div>
            {currentCampus.Students !== 0 ? (
              <div>{renderAllStudent()}</div>
            ) : (
              <div>
                <p>There is no student currently register on this campus</p>
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
