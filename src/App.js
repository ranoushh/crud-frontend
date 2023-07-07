import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Campuses from "./components/campuses";
import Students from "./components/students";
import AddStudents from "./components/AddStudents";
import Home from "./components/Home";
import Header from "./components/Header";
import AddCampus from "./components/AddCampus";
import CampusView from "./components/CampusView";
import EditCampus from "./components/EditCampus";
import EditStudent from "./components/EditStudent";
import SingleStudent from "./components/SingleStudent";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Header />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/addStudents" element={<AddStudents />} />
          <Route path="/addcampus" element={<AddCampus />} />
          <Route path="/campuses/:id" element={<CampusView />} />
          <Route path="/campuses/editcampus/:id" element={<EditCampus />} />
          <Route path="/students/editStudent/:id" element={<EditStudent />} />
          <Route path="/students/:id" element={<SingleStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
