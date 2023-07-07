import React from "react";
import { Link } from "react-router-dom";

const StudentCard = (props) => {
  return (
    <div className="student-card">
      <Link to={`/students/${props.studentId}`}>
        <div className="frame">
          <div className="student-image">
            <img src={props.imageUrl} width="200" height="200" />
          </div>
          <p>{props.firstName + " " + props.lastName} </p>
        </div>
      </Link>
    </div>
  );
};

export default StudentCard;
