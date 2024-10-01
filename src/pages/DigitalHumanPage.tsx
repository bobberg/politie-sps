import React, { useEffect } from "react";

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

  return (
    <div
      style={{
        background: `url(https://res.cloudinary.com/ddownn0ib/image/upload/v1723010146/Pre_Sales_Demo/demobackground_yuria_jmvf3x.png) no-repeat center center fixed`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    ></div>
  );
};

export default DigitalHumanPage;
