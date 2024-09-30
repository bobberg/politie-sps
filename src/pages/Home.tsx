import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import Info from "../assets/Info";
import Notebook from "../assets/Notebook";
import Zien from "../assets/Zien";
import { EmergencyPhone } from "../assets/EmergencyPhone";

const Home = () => {
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
                <span>Onderwerpen</span>
              </div>
            </Link>
            <Link to="https://www.politie.nl/onderwerpen">
              <div className="button">
                <Info />
                <span>Ik wil iets weten</span>
              </div>
            </Link>
            <Link to="https://www.politie.nl/aangifte-of-melding-doen/">
              <div className="button">
                <Zien />
                <span>Ik wil iets melden</span>
              </div>
            </Link>
            <Link to="https://www.mijnslachtofferzaak.nl">
              <div className="button">
                <Notebook />
                <span>Ik wil de status van mijn zaak weten</span>
              </div>
            </Link>
            <Link to="/digital-human">
              <div className="button">
                <img
                  src="./round-pally.png"
                  alt="Pally"
                  style={{ height: "80px" }}
                />
                <span>Praat met Pally</span>
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
