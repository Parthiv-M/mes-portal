import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import Landing from './pages/Landing/Landing';
import EventsPage from "./pages/Events/Events";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/"
            element={ <Landing /> }
          />
          <Route 
            path="/events"
            element={ <EventsPage /> }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
