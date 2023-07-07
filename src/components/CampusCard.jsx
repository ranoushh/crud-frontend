import React from "react";
import { Link } from "react-router-dom";
import "../style/CampusCard.css";

const CampusCard = (props) => {
  return (
    <div className="campus-card">
      <Link to={`/campuses/${props.campusId}`} className="campus-link">
        <div className="frame">
          <div className="campus-image">
            <img src={props.imageUrl} alt={props.campusName} />
          </div>
          <p className="campus-name">{props.campusName}</p>
        </div>
      </Link>
    </div>
  );
};

export default CampusCard;
