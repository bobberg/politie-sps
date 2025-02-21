import { Options } from "react-use-websocket";

import { UneeqInteractionsOptions } from "../types/uneeq";

// Change this into typescript so it loads the whole script
export const uneeqConfig: UneeqInteractionsOptions = {
  connectionUrl: "https://api-eu.uneeq.io",
  personaId: "1471e2fc-d5b9-4222-a0be-c288e91592a4",
  displayCallToAction: true,
  renderContent: true,
  mobileViewWidthBreakpoint: 900,
  layoutMode: "fullScreen",
  cameraAnchorPosition: "loose_close_up",
  logLevel: "info",
  enableMicrophone: false,
  showUserInputInterface: true,
  enableVad: true,
  enableInterruptBySpeech: false,
  autoStart: false,
  containedAutoLayout: true,
  showClosedCaptions: true,
  captionsPosition: "bottom-left",
  customMetadata: {},
  speechRecognitionHintPhrasesBoost: 0,
  languageStrings: {
    default: {
      callToActionText: "👋 Hey! It is so good to meet you.",
      errorText: "An error occurred.",
      textInputPlaceholder: "Type here...",
      showContentToolTip: "Show Content",
      sendQuestionButtonToolTip: "Send Message",
      startRecordingButtonToolTip: "Start Recording",
      unmuteMicrophoneToolTip: "Unmute",
      muteMicrophoneToolTip: "Mute",
      microphonePermissionNotAllowedButtonToolTip:
        "Microphone permission not allowed",
      microphoneEnabledHintTitle: "Microphone Enabled",
      microphoneEnabledHintText: "You can speak to me, I'm listening.",
      microphoneEnabledHintTitleOverlay: "Mic Enabled",
      microphoneNotAllowedMessage:
        "Microphone permission was not allowed. Please allow access to your microphone " +
        "via your browser settings, and try again.",
      recordingTapToStart: "Tap to record, tap again to send",
      recordingSpeakNowPrompt: "Speak now",
      recordingTapStopWhenDone: "Tap stop when done",
      recordingStopButtonToolTip: "Stop Recording",
      recordingRequestingMicrophonePrompt: "Requesting Microphone",
      settingsExitButton: "Exit",
      confirmExitDescription: "Are you sure you want to exit?",
      confirmExitStayButton: "STAY",
      confirmExitEndButton: "EXIT",
      hideContentButton: "Hide Content",
      hideDigitalHumanButton: "Hide Digital Human",
    },
  },
  welcomePrompt: "Hello! How can I help you today?",
};

export const uneeqWebSocketOptions: Options = {
  shouldReconnect: (closeEvent) => true,
  reconnectInterval: 3000,
  reconnectAttempts: 10,
};

export const uneeqScriptUrl =
  "https://cdn-eu.uneeq.io/hosted-experience/deploy/index.js";
export const uneeqScriptId = "uneeq-script";
export const uneeqScriptGlobalVariable = "Uneeq";