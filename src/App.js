import React from "react";
import './sass/style.scss';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
  <div className="wrapper">
    <Router>
      <div>
        <nav>
          <input type="checkbox" id="check" />
          <label htmlfor="check" class="checkbtn">
              <i className="fas fa-bars"></i>
          </label>
          <label className="logo">The YAY Company</label>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                Home
                </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="nav-link">
                News
                </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
                </NavLink>
            </li>
          </ul>
          <div className="search-container">
            <input type="text" placeholder="Search"></input>
            <button type="submit">GO</button>
          </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>

    <Footer />
    </>
  );
}

export default App;