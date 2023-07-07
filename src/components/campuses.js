import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCampusThunk,
  fetchAllCampusesThunk,
} from "../redux/campuses/campuses.action";
import { Link } from "react-router-dom";
import CampusCard from "./CampusCard";
import "../style/AllCampuses.css";

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
    <div className="allCampus">
      <h1>All Campuses</h1>
      <Link to="/addcampus">
        <button>Add New Campus</button>
      </Link>
      <div>
        {allCampuses.length > 0 ? (
          <div className="list-students-grid">
            {allCampuses.map((campus) => (
              <div key={campus.id} className="card-wrapper">
                <div className="button-container">
                  <button onClick={() => deleteCampus(campus.id)} id="delete">
                    x
                  </button>
                </div>
                <CampusCard
                  campusId={campus.id}
                  campusName={campus.name}
                  imageUrl={campus.imageurl}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No campuses registered.</p>
        )}
      </div>
    </div>
  );
}
