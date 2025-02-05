import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import Info from "../assets/Info";

import ChatBubble from "../assets/ChatBubble";

import { EmergencyPhone } from "../assets/EmergencyPhone";
import PoliceAgentIcon from "../assets/PoliceAgentIcon";

const Home = () => {
  // const baseUrl =
  //   process.env.REACT_APP_PUBLIC_URL ||
  //   "https://zealous-wave-0e83e9a03.5.azurestaticapps.net/";

  return (
    <>
      <div className="App">
        <Navbar />
        <main className="main-body" style={{ backgroundColor: "#EAF0F7" }}>
          <h1>Hoe kunnen we je helpen?</h1>
          <h2>Selecteer een optie om verder te gaan</h2>
          <div className="button-container">
            <Link to="https://www.politie.nl/onderwerpen">
              <div className="button">
                <Info />
                <span>Meer weten?</span>
                <span style={{ fontWeight: "normal", paddingTop: "24px" }}>
                  Bekijk alle onderwerpen van a-z
                </span>
              </div>
            </Link>
            <Link to="https://www.politie.nl/aangifte-of-melding-doen/">
              <div className="button">
                <ChatBubble />
                <span>Aangifte of melding doen?</span>
                <span style={{ fontWeight: "normal", paddingTop: "24px" }}>
                  Bekijk alle aangifte- en meldformulieren
                </span>
              </div>
            </Link>
            <Link to="https://www.politie.nl/">
              <div className="button">
                <PoliceAgentIcon />
                <span>Meer ontdekken op politie.nl?</span>
                <span style={{ fontWeight: "normal", paddingTop: "24px" }}>
                  Bekijk meer informatie en diensten op onze website
                </span>
              </div>
            </Link>

            <Link to={`/digital-human`}>
              <div className="button">
                <img
                  src="./round-pally.png"
                  alt="Pally"
                  style={{ height: "80px" }}
                />
                <span>Heb je andere vragen?</span>
                <span style={{ fontWeight: "normal", paddingTop: "24px" }}>
                  Praat met Wendy, onze digitale politie agent
                </span>
              </div>
            </Link>
          </div>
        </main>
        <footer className="footer">
          <EmergencyPhone />
          <span>In noodgevallen, bel 112</span>
        </footer>
      </div>
    </>
  );
};

export default Home;
