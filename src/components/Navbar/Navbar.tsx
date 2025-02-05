import React from "react";

import { Link } from "react-router-dom";

import { EmergencyPhone } from "../../assets/EmergencyPhone";
import PolitieLogoBig from "../../assets/PolitieLogoBig";
import "./Navbar.css"; // Ensure to create a CSS file for styles if needed

const Navbar = () => {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#182866" }}>
        <div className="navbar-emergency-container">
          <EmergencyPhone svgColor="white " />
          <span style={{ color: "white" }}>In noodgevallen, bel 112</span>
        </div>
        <div className="navbar-brand">
          <Link to="/">
            <PolitieLogoBig />
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
