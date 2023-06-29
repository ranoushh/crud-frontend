import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campuses">Campuses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campuses/" element={<Campuses />} />
          <Route path="/students/" element={<Students />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
