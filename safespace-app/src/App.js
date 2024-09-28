import logo from './logo.svg';
import './App.css';
import Mainscreen from './Mainscreen'; // Import Mainscreen component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* Add a link to navigate to Mainscreen */}
          <nav>
            <Link to="/mainscreen">Go to Mainscreen</Link>
          </nav>
        </header>

        {/* Define the routes */}
        <Routes>
          {/* Route for Mainscreen */}
          <Route path="/mainscreen" element={<Mainscreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;