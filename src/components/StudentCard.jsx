import "../style/StudentCard.css";
import React from "react";
import { Link } from "react-router-dom";

const StudentCard = (props) => {
  return (
    <div className="student-card">
      <Link to={`/students/${props.studentId}`} className="student-link">
        <div className="frame">
          <div className="student-image">
            <img src={props.imageUrl} alt={props.firstName} />
          </div>
          <p className="studetn-name">
            {props.firstName + " " + props.lastName}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default StudentCard;
