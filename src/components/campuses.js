import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCampusThunk,
  fetchAllCampusesThunk,
} from "../redux/campuses/campuses.action";
import axios from "axios";
import { Link } from "react-router-dom";
import CampusCard from "./CampusCard";

export default function Campuses() {
  //need our allCampuses array.
  //array will have the name, image, address, description,
  //name and address cannot be null
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();
  const fetchAllCampuses = () => {
    console.log("RUNNING DISPATCH FROM fetchAllCampuses");
    return dispatch(fetchAllCampusesThunk());
  };

  useEffect(() => {
    console.log("FETCH ALL Campuses FIRING IN USEEFFECT");
    fetchAllCampuses();
  }, []);

  function deleteCampus(id) {
    console.log("button");
    dispatch(deleteCampusThunk(id));
  }

  return (
    <div>
      <br></br>
      <h1
        style={{
          fontFamily: "georgia,garamond,serif",
          fontSize: "40px",
          fontStyle: "italic",
        }}
      >
        All Campuses
      </h1>
      {/* <a href="/addcampus">
          <button>Add Campus</button>
        </a> */}

      <Link to="/addcampus">
        <button>Add New Campus</button>
      </Link>

      <div>
        {allCampuses.length > 0 ? (
          <ul>
            {allCampuses.map((campus) => (
              <li
                key={campus.id}
                style={{ display: "inline-block", marginRight: "70px" }}
              >
                <button onClick={() => deleteCampus(campus.id)} id="delete">
                  x
                </button>
                <CampusCard
                  campusId={campus.id}
                  campusName={campus.name}
                  imageUrl={campus.imageurl}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No campuses registered.</p>
        )}
      </div>
    </div>
  );
}
