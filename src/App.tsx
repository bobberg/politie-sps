import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DigitalHumanPage from "./pages/DigitalHumanPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-human" element={<DigitalHumanPage />} />

        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
