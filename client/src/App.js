import './App.css';
import axios from "axios";

import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import Landing from './pages/Landing/Landing';
import EventsPage from "./pages/Events/Events";
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
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
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
