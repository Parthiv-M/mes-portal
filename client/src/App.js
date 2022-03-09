import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import Landing from './pages/Landing/Landing';
import EventsPage from "./pages/Events/Events";
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact
            path="/"
            element={ <Landing /> }
          />
          <Route 
            exact
            path="/events"
            element={ <EventsPage /> }
          />
          <Route
            exact
            path="/register"
            element={ <Register /> }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
