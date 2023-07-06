import React from "react";
import { Link } from "react-router-dom";

const CampusCard = (props) => {
  return (
    <div className="campus-card">
      <Link to={`/campuses/${props.campusId}`}>
        <div className="frame">
          <h2 style={{ fontFamily: "georgia,garamond,serif" }}>
            {props.campusName}
          </h2>
          <div className="campus-image">
            <img src={props.imageUrl} width="350" height="300" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CampusCard;