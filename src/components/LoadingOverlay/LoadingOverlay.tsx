import React from "react";
import "./LoadingOverlay.css"; // Ensure to create a CSS file for styles if needed

const LoadingOverlay = () => (
  <div className="loading-overlay">
    <div className="loading-dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  </div>
);

export default LoadingOverlay;
