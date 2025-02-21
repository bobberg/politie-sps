import React, { useEffect, useState } from "react";
// Import the flag components and other assets
import {
  NlFlag,
  GbFlag,
  EsFlag,
  FrFlag,
  CnFlag,
  DeFlag,
  PtFlag,
  ItFlag,
  AeFlag,
  TrFlag,
  PlFlag,
  JpFlag,
  InFlag,
  DkFlag,
  SeFlag,
  ChevronDown,
  ChevronUp,
} from "../assets/img";
import ConversationInterface from "../components/ConversationInterface/ConversationInterface";
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";
import LanguageButton from "../components/LanguageButton/LanguageButton";

import videoSrc from "../assets/video/wendy-right.mp4";
import Navbar from "../components/Navbar/Navbar";
import "../App.css";

const DigitalHumanPage = () => {
  const [loading, setLoading] = useState(false);
  const [uneeqSetup, setUneeqSetup] = useState(false); // Track Uneeq setup state
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  const handleShowMoreClick = () => {
    setShowAllLanguages(!showAllLanguages);
  };

  const languages = [
    { FlagComponent: NlFlag, text: "Nederlands", locale: "nl-NL" },
    { FlagComponent: GbFlag, text: "English", locale: "en-US" },
    { FlagComponent: EsFlag, text: "Español", locale: "es-ES" },
    { FlagComponent: FrFlag, text: "Français", locale: "fr-FR" },
    { FlagComponent: CnFlag, text: "中国人", locale: "zh-CN" },
    { FlagComponent: DeFlag, text: "Deutsch", locale: "de-DE" },
    { FlagComponent: PtFlag, text: "Português", locale: "pt-PT" },
    { FlagComponent: ItFlag, text: "Italiano", locale: "it-IT" },
    { FlagComponent: AeFlag, text: "عربي", locale: "ar-SA" },
    { FlagComponent: TrFlag, text: "Türkçe", locale: "tr-TR" },
    { FlagComponent: PlFlag, text: "Polski", locale: "pl-PL" },
    { FlagComponent: JpFlag, text: "日本語", locale: "ja-JP" },
    { FlagComponent: InFlag, text: "हिंदी", locale: "hi-IN" },
    { FlagComponent: DkFlag, text: "Dansk", locale: "da-DK" },
    { FlagComponent: SeFlag, text: "Svenska", locale: "sv-SE" },
  ];

  const setupUneeq = () => {
    const uneeqOptions = {
      // connectionUrl: "https://api-eu.uneeq.io",
      // personaId: "1471e2fc-d5b9-4222-a0be-c288e91592a4",
      personaShareId: "70b67c3f-9548-4336-aef6-b40762d8cf33",

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
      customData: {
        locale: "nl-NL",
      },
    };

    (window as any).uneeqInteractionsOptions = uneeqOptions;

    const scriptId = "uneeq-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://hosted.de.uneeq.io/interactions/v1/deploy";
      // script.src = "https://cdn-eu.uneeq.io/hosted-experience/deploy/index.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);

      script.onload = () => {
        if (typeof (window as any).Uneeq !== "undefined") {
          console.log("Uneeq loaded successfully.");
          setUneeqSetup(true); // Set Uneeq setup to true
        }
      };

      // Cleanup function to remove the script
      return () => {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    } else {
      setUneeqSetup(true); // If already loaded, set Uneeq setup to true
    }
  };

  useEffect(() => {
    setupUneeq();
  }, []);

  const handleLanguageButtonClick = (locale: string) => {
    setLoading(true); // Set loading state to true

    // Check if Uneeq has been set up
    if (!uneeqSetup) {
      setupUneeq(); // Call setupUneeq if it hasn't been set up yet
    }

    // Start the interaction after setting up the locale
    (window as any).uneeqInteractionsOptions.customData.locale = locale; // Set the locale
    console.log("Uneeq loaded successfully.");
    if (typeof (window as any).Uneeq !== "undefined") {
      (window as any).Uneeq.start(); // Start the interaction
    }
  };

  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
        key={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Navbar />
      {loading && <LoadingOverlay />}
      {/* <ConversationInterface /> */}
      <div className="centered-container">
        <h4 className="heading">Welkom, ik ben virtuele agent Wendy</h4>
        <p className="subheading">In welke taal kan ik je helpen?</p>

        <div className="language-buttons-container">
          {languages
            .slice(0, showAllLanguages ? languages.length : 3)
            .map(({ FlagComponent, text, locale }) => (
              <LanguageButton
                key={locale} // Use locale as a unique key
                FlagComponent={FlagComponent}
                text={text}
                locale={locale}
                onClick={() => handleLanguageButtonClick(locale)}
                loading={loading}
              />
            ))}
        </div>
        {languages.length > 3 && (
          <button
            onClick={handleShowMoreClick}
            className="language-buttons-container language-buttons-show-more-button"
          >
            <span>
              {showAllLanguages ? "Toon minder talen" : "Toon meer talen"}
            </span>
            {showAllLanguages ? <ChevronUp /> : <ChevronDown />}
          </button>
        )}
      </div>
    </div>
  );
};

export default DigitalHumanPage;
