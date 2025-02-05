import React from "react";

import "./LanguageButton.css";

interface LanguageButtonProps {
  FlagComponent: React.ComponentType;
  text: string;
  locale: string;
  onClick: () => void;
  loading: boolean;
}

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
