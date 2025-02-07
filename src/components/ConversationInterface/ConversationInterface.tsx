import React, { useState } from "react";

import "./ConversationInterface.css";

import Microphone from "../../assets/img/Microphone";
import ArrowUp from "../../assets/img/ArrowUp";
const ConversationInterface = () => {
  const [message, setMessage] = useState("");
  const [recording, setRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="conversation-interface">
      {/* Add your conversation interface components here */}
      <h1 className="conversation-interface-heading">Hoe kan ik je helpen?</h1>
      <div>
        <div className="chat-message">
          Welkom. Ik kan al je vragen beantwoorden. Beschrijf alsjeblieft
          waarmee ik je kan helpen.
        </div>
      </div>
      <div className="conversation-interface-input-container">
        <div className="conversation-interface-microphone-container">
          {recording && (
            <div className="conversation-interface-microphone-pulsating-circle"></div>
          )}
          <div
            className={"conversation-interface-microphone"}
            //   onclick start pulsing animation and  onclick stop pulsing animation
            onClick={() => {
              if (!recording) {
                console.log("Start recording");
                setRecording(true);
              } else {
                console.log("Stop recording");
                setRecording(false);
              }
            }}
          >
            <Microphone />
          </div>
          <div>Tik op de microfoon om te praten</div>
        </div>
        <div className="conversation-interface-input-quick-replies">
          <button
            className="quick-reply"
            onClick={() => setMessage("Ik wil diefstal melden")}
          >
            Ik wil diefstal melden
          </button>
          <button
            className="quick-reply"
            onClick={() => setMessage("Ik heb een voorwerp gevonden")}
          >
            Ik heb een voorwerp gevonden
          </button>
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="U kunt hier typen..."
          />
          <button onClick={handleSend} className="chat-input-send">
            <ArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConversationInterface;
