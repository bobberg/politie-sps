import { Options } from "react-use-websocket";

import { UneeqInteractionsOptions } from "../types/uneeq";

export const uneeqConfig: UneeqInteractionsOptions = {
  personaShareId: process.env.REACT_APP_PERSONA_SHARE_ID || "",
  layoutMode: "fullScreen",
  showUserInputInterface: true,
  playWelcome: true,
  backgroundImageUrl:
    "https://res.cloudinary.com/duivsslmk/image/upload/fl_preserve_transparency/v1738766554/background_pm5dof.jpg",
  voiceInputMode: "SPEECH_RECOGNITION",
  customStyles: `app-content.fullscreen:not(.fullscreen-mobile) { max-width: 30vw !important; height: fit-content !important; }`,
  cameraPosition: {
    camera_position_vertical: 0,
    camera_position_horizontal: 0,
    camera_position_distance: 0.5,
  },
};

// export const webSocket = {
//   socketUrl: import.meta.env.VITE_KIOSK_SOCKET_URL,
//   options: {
//     heartbeat: {
//       message: JSON.stringify({ type: "ping" }),
//       returnMessage: JSON.stringify({ type: "pong" }),
//       interval: 10000,
//       timeout: 30000,
//     },
//     shouldReconnect: () => true,
//   } as Options,
// };

export const scriptSrc = process.env.REACT_APP_UNEEQ_SCRIPT_SRC;

export const avatar = {
  name: "Wendy",
};
