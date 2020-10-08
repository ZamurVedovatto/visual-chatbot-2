import React from "react";
import { Chatbot } from "react-chatbot-kit";

import skybotConfig from "../../../bots/skybot/config";
import skybotMessageParser from "../../../bots/skybot/MessageParser";
import skybotActionProvider from "../../../bots/skybot/ActionProvider";

import "./ChatbotSection.css";

const ChatbotSection = () => {
  return (
    <div className="chatbot-section">
      <Chatbot
        config={skybotConfig}
        messageParser={skybotMessageParser}
        actionProvider={skybotActionProvider}
      />
    </div>
  );
};

export default ChatbotSection;
