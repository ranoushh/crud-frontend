import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Campuses from "./components/campuses";
import Students from "./components/students";
import AddStudents from "./components/AddStudents";
import Home from "./components/Home";
import AddCampus from "./components/AddCampus";
import CampusView from "./components/CampusView";
import EditCampus from "./components/EditCampus";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}

        <br></br>

        <nav>
          <Link to="/" style={{ marginLeft: "240px", float: "left" }}>
            Home
          </Link>{" "}
          <Link to="/students" style={{ marginRight: "140px", float: "right" }}>
            Students
          </Link>{" "}
          <Link to="/campuses" style={{ marginRight: "10px", float: "right" }}>
            Campuses
          </Link>{" "}
          {/* <Link to="/AddStudents">Add Students</Link> {" "} 
              {/* <Link to="/addcampus">Add Campus</Link> {" "} */}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/addStudents" element={<AddStudents />} />
          <Route path="/addcampus" element={<AddCampus />} />
          <Route path="/campuses/:id" element={<CampusView />} />
          <Route path="/campuses/:id/editcampus" element={<EditCampus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
