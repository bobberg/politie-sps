import React from "react";

interface LanguageButtonProps {
  FlagComponent: React.ComponentType;
  text: string;
  locale: string;
  onClick: () => void;
  loading: boolean;
}

const handleLanguageButtonClick = (locale: string) => {
  // Load the Uneeq script if it hasn't been loaded yet
  console.log("SHOULD LOAD UNEEQ SCRIPT");
  // const scriptId = "uneeq-script";
  // if (!document.getElementById(scriptId)) {
  //   const script = document.createElement("script");
  //   // script.src = "https://hosted.de.uneeq.io/interactions/v1/deploy";
  //   script.src = "https://api-eu.uneeq.io";
  //   script.async = true;
  //   script.id = scriptId;
  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     if (typeof (window as any).Uneeq !== "undefined") {
  //       console.log("Uneeq loaded successfully.");
  //       (window as any).uneeqInteractionsOptions.customData.locale = locale;
  //       (window as any).Uneeq.start(); // Start the interaction
  //     }
  //   };
  // } else {
  //   // If the script is already loaded, just start the interaction
  //   (window as any).uneeqInteractionsOptions.customData.locale = locale;
  //   console.log("Uneeq loaded successfully.");
  //   if (typeof (window as any).Uneeq !== "undefined") {
  //     (window as any).Uneeq.start(); // Start the interaction
  //   }
  // }
};

// Loading Overlay Component
const LoadingOverlay = () => (
  <div className="loading-overlay">
    <div className="loading-dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
);

const LanguageButton: React.FC<LanguageButtonProps> = ({
  FlagComponent,
  text,
  locale,
  onClick,
  loading,
}) => (
  <button
    className="language-button"
    onClick={onClick}
    disabled={loading} // Disable button while loading
  >
    <div className="language-button-content">
      <FlagComponent />
      <span className="language-text">{text}</span>
    </div>
  </button>
);

export default LanguageButton;
