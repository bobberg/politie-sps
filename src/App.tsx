import React from "react";
// import React, { useState, useEffect, useMemo } from "react";
// import { PublicClientApplication } from "@azure/msal-browser";
// import { Client } from "@microsoft/microsoft-graph-client";
import "./App.css";
import PolitieLogo from "./assets/PolitieLogo";
// Import your icons here
import Info from "./assets/Info";
import Notebook from "./assets/Notebook";
import VideoCamera from "./assets/VideoCamera";
import Zien from "./assets/Zien";
import { EmergencyPhone } from "./assets/EmergencyPhone";

// import {
//   AzureCommunicationTokenCredential,
//   CommunicationUserIdentifier,
// } from "@azure/communication-common";
// import {
//   CallComposite,
//   fromFlatCommunicationIdentifier,
//   useAzureCommunicationCallAdapter,
// } from "@azure/communication-react";

// const msalConfig = {
//   auth: {
//     clientId: "YOUR_CLIENT_ID",
//     authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
//     redirectUri: "http://localhost:3000",
//   },
// };

// const app = new PublicClientApplication(msalConfig);

const App = () => {
  //   // Replace '' with the ACS user identity value
  //   const [userId, setUserId] = useState<string>("");

  //   // Replace '' with the ACS token value
  //   const [token, setToken] = useState<string>("");

  //   // Replace '' with the Teams meeting link value
  //   const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>("");

  //   const [accessToken, setAccessToken] = useState(null);

  //   const credential = useMemo(() => {
  //     if (token) {
  //       return new AzureCommunicationTokenCredential(token);
  //     }
  //     return;
  //   }, [token]);

  //   const callAdapterArgs = useMemo(() => {
  //     if (userId && credential && displayName && teamsMeetingLink) {
  //       return {
  //         userId: fromFlatCommunicationIdentifier(
  //           userId
  //         ) as CommunicationUserIdentifier,
  //         displayName,
  //         credential,
  //         locator: { meetingLink: teamsMeetingLink },
  //       };
  //     }
  //     return {};
  //   }, [userId, credential, displayName, teamsMeetingLink]);

  //   const callAdapter = useAzureCommunicationCallAdapter(callAdapterArgs);

  //   useEffect(() => {
  //     /* Commenting out for now

  //     const init = async () => {
  //         setMessage('Getting ACS user');
  //         //Call Azure Function to get the ACS user identity and token
  //         let res = await fetch(process.env.REACT_APP_ACS_USER_FUNCTION as string);
  //         let user = await res.json();
  //         setUserId(user.userId);
  //         setToken(user.token);

  //         setMessage('Getting Teams meeting link...');
  //         //Call Azure Function to get the meeting link
  //         res = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);
  //         let link = await res.text();
  //         setTeamsMeetingLink(link);
  //         setMessage('');
  //         console.log('Teams meeting link', link);
  //     }
  //     init();

  //     */
  //   }, []);

  return (
    <div className="App">
      <nav className="navbar" style={{ backgroundColor: "#182866" }}>
        <PolitieLogo />
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

          <a href="https://politie-sps.azurewebsites.net/visit">
            <div className="button">
              <VideoCamera />
              <span>Ik wil direct contact met de politie</span>
            </div>
          </a>
          {/* {callAdapter ? (
            <div>
              <h1>Contact Customer Service</h1>
              <div className="wrapper">
                <CallComposite adapter={callAdapter} />
              </div>
            </div>
          ) : (
            <></>
          )} */}
        </div>
      </main>
      <footer className="footer">
        <EmergencyPhone />
        <span>In noodgevallen, bel 112</span>
      </footer>
    </div>
  );
};

export default App;
