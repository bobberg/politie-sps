import React, { useState } from "react";

import "./ConversationInterface.css";

import Microphone from "../../assets/img/Microphone";

import ArrowUp from "../../assets/img/ArrowUp";
import { QuestionExplainerCircle } from "../../assets/img";
const ConversationInterface = () => {
  const [showExplainer, setShowExplainer] = useState(false);
  const [message, setMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const [loadingBotReply, setLoadingBotReply] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      text: "Welkom. Ik kan al je vragen beantwoorden. Beschrijf alsjeblieft waarmee ik je kan helpen.",
    },
  ]);

  const handleSend = async (quickReply?: string) => {
    const userMessage = quickReply || message.trim();
    if (userMessage) {
      setChatMessages([...chatMessages, { type: "user", text: userMessage }]);
      setMessage("");
      // try {
      //   const response = await fetch(
      //     "https://api.placeholder.com/sendMessage",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ message: userMessage }),
      //     }
      //   );

      //   if (response.ok) {
      //     const data = await response.json();
      //     setChatMessages([...chatMessages, { type: "bot", text: data.reply }]);
      //   } else {
      //     console.error("Failed to send message");
      //   }
      // } catch (error) {
      //   console.error("Error sending message:", error);
      // }
    }
  };
  const handleSendClick = () => {
    handleSend();
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  // create function for web speech recognition API for when the microphone is clicked
  const handleSpeechRecognition = () => {
    // TODO: Change this into
    // check if the browser supports the web speech recognition API
    if (!("webkitSpeechRecognition" in window)) {
      console.log("Speech recognition is not supported in this browser.");
      return;
    }
    // create a new instance of the web speech recognition API
    const recognition = new (window as any).webkitSpeechRecognition();
    // set the language of the recognition
    recognition.lang = "nl-NL";
    // set the continuous property to true to keep listening
    recognition.continuous = true;
    // start the recognition
    recognition.start();
    // add an event listener for when the recognition returns a result
    recognition.onresult = (event: any) => {
      // get the transcript of the result
      const transcript = event.results[event.results.length - 1][0].transcript;
      // set the message to the transcript
      setMessage(transcript);
      // stop the recognition
      recognition.stop();
      // send the message
      handleSend();
    };
  };
  return (
    <div className="conversation-interface">
      {/* Add your conversation interface components here */}
      <div
        className="conversation-interface-explainer-questionmark"
        onClick={() => setShowExplainer(true)}
      >
        <QuestionExplainerCircle />
      </div>

      {showExplainer ? (
        <>
          <div className="conversation-interface-explainer-background"></div>
          <div className="conversation-interface-explainer">
            <div className="conversation-interface-explainer-microphone-circle">
              <Microphone fill="#182866" />
            </div>
            <h2>Druk kort op de microfoon om met Wendy te praten</h2>
            <p>
              Voor een gesprek met Wendy, druk bij het begin van elke interactie
              op het microfoonicoon.
            </p>
            {/* onclick setShowExplainer false */}
            <button
              className="conversation-interface-explainer-button"
              onClick={() => setShowExplainer(false)}
            >
              Begrepen
            </button>
          </div>
        </>
      ) : null}
      <h1 className="conversation-interface-heading">Hoe kan ik je helpen?</h1>
      <div className="chat-container">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}-chat-message`}>
            {msg.text}
          </div>
        ))}

        {loadingBotReply ? (
          <div className="chat-message bot-chat-message ">
            {/* make this actually a loading messge */}
            <div className="bot-typing-indicator">
              <div className="bot-typing-indicator-dot"></div>
              <div className="bot-typing-indicator-dot"></div>
              <div className="bot-typing-indicator-dot"></div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* <div className="chat-message bot-chat-message">
          Welkom. Ik kan al je vragen beantwoorden. Beschrijf alsjeblieft
          waarmee ik je kan helpen.
        </div> */}
        {/* <div className="chat-message user-chat-message">
          Je kunt ook kiezen uit de volgende opties:
        </div> */}
      </div>
      <div className="conversation-interface-input-container">
        {!("webkitSpeechRecognition" in window) ? (
          <div>Speech recognition is not supported in this browser.</div>
        ) : (
          <div className="conversation-interface-microphone-container">
            {recording ? (
              <div className="conversation-interface-microphone-pulsating-circle"></div>
            ) : null}
            <div
              className={"conversation-interface-microphone"}
              //   onclick start pulsing animation and  onclick stop pulsing animation
              onClick={() => {
                if (!recording) {
                  console.log("Start recording");
                  // use speech recognition api and set the message when done
                  handleSpeechRecognition();
                  setRecording(true);
                } else {
                  console.log("Stop recording");
                  setRecording(false);
                }
              }}
            >
              <Microphone />
            </div>
            {recording ? (
              <div className="conversation-interface-microphone-text-listening">
                Ik ben aan het luisteren...
              </div>
            ) : (
              <div className="conversation-interface-microphone-text-instruction">
                Tik op de microfoon om te praten
              </div>
            )}
          </div>
        )}
        {/* show quick-replies if no user message has been sent yet
        TODO: Change this into a conversational AI LLM / platform generated quick reply */}
        {chatMessages.length === 1 ? (
          <div className="conversation-interface-input-quick-replies">
            <button
              className="quick-reply"
              onClick={() => handleSend("Ik wil diefstal melden")}
            >
              Ik wil diefstal melden
            </button>
            <button
              className="quick-reply"
              onClick={() => handleSend("Ik heb een voorwerp gevonden")}
            >
              Ik heb een voorwerp gevonden
            </button>
          </div>
        ) : null}

        <div className="chat-input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="U kunt hier typen..."
          />
          <button
            onClick={message ? handleSendClick : undefined}
            // if empty, set class for disabling button chat-input-send-disabled. If not empty, set className="chat-input-send"
            className={`chat-input-send ${
              message ? "" : "chat-input-send-disabled"
            }`}
          >
            <ArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConversationInterface;
