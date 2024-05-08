import React from "react";
import "./App.css";
import PolitieLogo from "./assets/PolitieLogo";
import { EmergencyPhone } from "./assets/EmergencyPhone";

// Import your icons here. For example:
import Info from "./assets/Info";
import Notebook from "./assets/Notebook";
import VideoCamera from "./assets/VideoCamera";
import Zien from "./assets/Zien";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar" style={{ backgroundColor: "#182866" }}>
        {/* Replace src with the path to the Politie logo */}
        <PolitieLogo />
        {/* <img
          src="politie-logo.png"
          alt="Politie Logo"
          className="navbar-logo"
        /> */}
      </nav>
      <main className="main-body" style={{ backgroundColor: "#EAF0F7" }}>
        <h1>Hoe kunnen we je helpen?</h1>
        <h2>Selecteer een optie om verder te gaan</h2>
        <div className="button-container">
          <a href="https://www.politie.nl/onderwerpen">
            <div className="button">
              <Info />
              <span>Ik wil iets weten</span>
            </div>
          </a>

          <a href="https://www.politie.nl/aangifte-of-melding-doen/">
            <div className="button">
              <Zien />
              <span>Ik wil iets melden</span>
            </div>
          </a>

          <a href="https://www.mijnslachtofferzaak.nl">
            <div className="button">
              <Notebook />
              <span>Ik wil de status van mijn zaak weten</span>
            </div>
          </a>

          <a href="https://www.politie.nl/">
            <div className="button">
              <VideoCamera />
              <span>Ik wil direct contact met een politieagent</span>
            </div>
          </a>
        </div>
      </main>
      <footer className="footer">
        <EmergencyPhone />
        {/* <EmergencyPhone alt="112 logo" className="footer-logo" /> */}
        {/* <img src={EmergencyPhone} alt="112 Logo" className="footer-logo" /> */}
        <span>In noodgevallen, bel 112</span>
      </footer>
    </div>
  );
};

export default App;
