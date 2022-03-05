import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/"
            element={ <Landing /> }
          />
          {/* <Route 
            path="/events"
            element={ <Events /> }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
