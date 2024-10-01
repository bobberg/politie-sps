import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import DigitalHumanPage from "./pages/DigitalHumanPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-human" element={<DigitalHumanPage />} />
        {/* I am getting 404 for /digital-human. How to fix */}

        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
