import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-style">
      <nav>
        <div className="header-logo">
          <h1>
            Campus
            <span>
              <img
                src="https://i.ibb.co/mqzthd0/certificate.png"
                alt="Campus Connect Logo"
                className="certificate"
              />
            </span>
            Connect
          </h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/campuses">Campuses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
