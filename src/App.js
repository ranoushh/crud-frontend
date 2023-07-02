import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Campuses from './components/campuses';
import Students from './components/students';
import AddStudents from './components/AddStudents';
import Home from './components/Home';
import AddCampus from './components/AddCampus';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>

              <Link to="/">Home</Link>
              <br/>
              <Link to="/campuses">Campuses</Link>
              <br/>
              <Link to="/students">Students</Link>
              <br/>
              <Link to="/AddStudents">Add Students</Link>
              <br/>
              <Link to="/AddCampus">Add Campus</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
          <Route path = "/AddStudents" element={<AddStudents/>} />
          <Route path = "/addcampus" element={<AddCampus/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
