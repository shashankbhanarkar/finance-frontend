// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditTransaction from "./pages/EditTransaction";

function App() {
  return (
    <Router>
      <div>
        {/* Optional: Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
          <div className="container">
            <a className="navbar-brand" href="/">💰 Finance Tracker</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/edit/1">Edit Transaction</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditTransaction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
