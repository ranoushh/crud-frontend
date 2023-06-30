import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Campuses from './components/campuses';
import Students from './components/students';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>

              <Link to="/">Home</Link>
              <br></br>
              <Link to="/campuses">Campuses</Link>
              <br></br>
              <Link to="/students">Students</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
