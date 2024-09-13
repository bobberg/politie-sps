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

          {/* <a href="https://politie-sps.azurewebsites.net/visit"> */}
          {/* <a href="https://visit.teams.microsoft.com/webrtc-web/?tenantId=939e76d1-059e-4930-96cb-5736a55e4a5e&threadId=19:meeting_NDQ0ZTdkNTQtODdhNS00Y2JmLWJiY2YtNGEzOTA0MjNlMDkz@thread.v2&organizerId=0eaa6d43-d47c-4a07-93d0-38dc406dc1af&biz=0&bid=SPS@politienl.onmicrosoft.com&ssid=qOTsXqba20ybKB2AwDbr6w2&joinWebUrl=https%3a%2f%2fteams.microsoft.com%2fl%2fmeetup-join%2f19%3ameeting_NDQ0ZTdkNTQtODdhNS00Y2JmLWJiY2YtNGEzOTA0MjNlMDkz%40thread.v2%2f0%3fcontext%3d%7b%22Tid%22%3a%22939e76d1-059e-4930-96cb-5736a55e4a5e%22%2c%22Oid%22%3a%220eaa6d43-d47c-4a07-93d0-38dc406dc1af%22%7d&ts=1717072363935"> */}
          {/* <a href="https://teams.microsoft.com/v2/?meetingjoin=true#/l/meetup-join/19:meeting_ZjQyZTVhNzItMzI4MC00ZDdhLWFkMTItNjE2ZjE4MThiMzc3@thread.v2/0?context=%7b%22Tid%22%3a%2241008dae-d4d5-4ab8-b3d4-fd02e468d9db%22%2c%22Oid%22%3a%22a3964e64-37ff-4dc4-94bc-bab1a6980c06%22%7d&anon=true&deeplinkId=bd046791-92c8-4bb7-ad42-5644d7cb4841">
            <div className="button">
              <VideoCamera />
              <span>Ik wil direct contact met de politie</span>
            </div>
          </a> */}
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
