import React from "react";

// fix this import
import { Link } from "react-router-dom";

// import "../App.css";

import { EmergencyPhone } from "../assets/EmergencyPhone";
import PolitieLogoBig from "../assets/PolitieLogoBig";

const Navbar = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#182866" }}>
        <div className="navbar-emergency-container">
          <EmergencyPhone fill="#fff" />
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
