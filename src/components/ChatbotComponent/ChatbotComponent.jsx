import React from "react";
import { Chatbot } from "react-chatbot-kit";

import visualbotConfig from "./../../bots/visualbot/config";
import visualbotMessageParser from "./../../bots/visualbot/MessageParser";
import visualbotActionProvider from "./../../bots/visualbot/ActionProvider";

import "./ChatbotComponent.css";

const ChatbotSection = () => {
  return (
    <div className="chatbot-section">
      <Chatbot
        config={visualbotConfig}
        messageParser={visualbotMessageParser}
        actionProvider={visualbotActionProvider}
      />
    </div>
  );
};

export default ChatbotSection;
