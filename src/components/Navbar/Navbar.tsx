import React from "react";

import { Link } from "react-router-dom";

import { EmergencyPhone } from "../../assets/EmergencyPhone";
import PolitieLogoBig from "../../assets/PolitieLogoBig";
import PhoneHangUp from "../../assets/PhoneHangUp";
import "./Navbar.css"; // Ensure to create a CSS file for styles if needed

const Navbar = () => {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#182866" }}>
        <div className="navbar-emergency-container">
          <EmergencyPhone fill="white " />
          <span style={{ color: "white" }}>In noodgevallen, bel 112</span>
        </div>
        <div className="navbar-brand">
          <Link to="/">
            <PolitieLogoBig />
          </Link>
        </div>
        {/* end conversation button on the right side - only render while active */}
        <div className="navbar-end">
          <button
            onClick={
              // refresh page
              () => window.location.reload()
            }
            className="navbar-end-button"
          >
            <div className="navbar-end-button-icon">
              <PhoneHangUp />
            </div>
            Refresh
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
