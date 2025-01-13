import React, { useEffect } from "react";
import { Chevron } from "../assets/img/Chevron";
import { NlFlag } from "../assets/img/NlFlag";
import { GbFlag } from "../assets/img/GbFlag";
import { DeFlag } from "../assets/img/DeFlag";
import { PlFlag } from "../assets/img/PlFlag";
// import { TrFlag } from "../assets/img/TrFlag";
import videoSrc from "../assets/video/wendy-right.mp4";
// import PolitieLogo from "../assets/PolitieLogo";
// import PolitieLogoNieuw from "../assets/PolitieLogoNieuw";
import Navbar from "../components/Navbar";
import "../App.css";
// import Navbar from "../components/Navbar";

const DigitalHumanPage = () => {
  useEffect(() => {
    const setupUneeq = () => {
      const uneeqOptions = {
        personaShareId: "70b67c3f-9548-4336-aef6-b40762d8cf33",
        displayCallToAction: true,
        position: "right",
        renderContent: true,
        cameraPosition: {
          camera_position_vertical: 0.0,
          camera_position_horizontal: 0.0,
          camera_position_distance: 0.8,
        },
        customStyles: "",
        enableTransparentBackground: false,
        playWelcome: true,
        ctaThumbnailUrl:
          "https://res.cloudinary.com/ddownn0ib/image/upload/v1723009979/DigitalHuman_Thumbnails%20for%20Hosted/yuriathumb_jcjj0a.png",
        mobileViewWidthBreakpoint: 0,
        backgroundImageUrl:
          "https://res.cloudinary.com/ddownn0ib/image/upload/v1721042733/Serko/64c9eb6daf293b0b0a29f331_Frame_9131_iuih66.jpg",
        layoutMode: "fullScreen",
        enableMicrophone: true,
        showUserInputInterface: true,
        voiceInputMode: "SPEECH_RECOGNITION",
        enableVad: false,
        autoStart: false,
        containedAutoLayout: true,
        initLoadHandler: true,
        languageStrings: {
          default: {
            callToActionText: "👋 Hey! It is so good to meet you.",
            errorText: "An error occurred.",
            textInputPlaceholder: "Type here...",
            sendQuestionButtonToolTip: "Send Message",
            startRecordingButtonToolTip: "Start Recording",
            microphonePermissionBlockedButtonToolTip:
              "Microphone permission blocked",
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
        speechToTextLocales: "en-US:nl-NL:de-DE:pl-PL",
        customData: {
          locale: "nl-NL",
          personaOverrides:
            '[{"header":"chainId","value":"899bafbb-2944-48e1-a2f0-67b0571f7910"},{"header":"agentId","value":""}]',
        },
      };

      (window as any).uneeqInteractionsOptions = uneeqOptions;

      const scriptId = "uneeq-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://hosted.de.uneeq.io/interactions/v1/deploy";
        script.async = true;
        script.id = scriptId;
        document.body.appendChild(script);

        script.onload = () => {
          if (typeof (window as any).Uneeq !== "undefined") {
            console.log("Uneeq loaded successfully.");
            // Initialize or interact with Uneeq here
          }
        };

        return () => {
          const existingScript = document.getElementById(scriptId);
          if (existingScript) {
            document.body.removeChild(existingScript);
          }
        };
      }
    };

    setupUneeq();
  }, []);

  const LanguageButton = ({
    FlagComponent,
    text,
  }: {
    FlagComponent: React.ComponentType;
    text: string;
  }) => (
    <button
      className="language-button"
      onMouseDown={(e) => (e.currentTarget.style.backgroundColor = "#19467E")}
      onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "#19467E")}
      onFocus={(e) => (e.currentTarget.style.backgroundColor = "#19467E")}
      onBlur={(e) => (e.currentTarget.style.backgroundColor = "#19467E")}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#19467E")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#19467E")}
      disabled={false}
    >
      <div className="language-button-content">
        <div className="language-button-content">
          <FlagComponent />
          <span className="language-text">{text}</span>
        </div>
        {/* chevron should go to the right */}
        <div className="language-button-chevron">
          <Chevron />
        </div>
      </div>
    </button>
  );

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
      {/* <div className="navbar">
        <div className="navbar-brand">
          <a href="/">
            <PolitieLogoNieuw />
          </a>
        </div>
      </div> */}
      <Navbar />
      <div className="centered-container">
        <h4 className="heading">Welkom, ik ben virtuele agent Wendy</h4>
        <p className="subheading">In welke taal kan ik u helpen?</p>
        <LanguageButton FlagComponent={NlFlag} text="Start Nederlands" />
        <LanguageButton FlagComponent={GbFlag} text="Start English" />
        <LanguageButton FlagComponent={DeFlag} text="Start Deutsch" />
        <LanguageButton FlagComponent={PlFlag} text="Uruchom Polski" />
        {/* <LanguageButton FlagComponent={TrFlag} text="Başlat Türkçe" /> */}
      </div>
    </div>
  );
};

export default DigitalHumanPage;
