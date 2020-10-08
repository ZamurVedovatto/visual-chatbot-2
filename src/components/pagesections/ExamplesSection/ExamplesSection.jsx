import React from "react";
import { Chatbot } from "react-chatbot-kit";

import skybotConfig from "../../../bots/skybot/config";
import skybotMessageParser from "../../../bots/skybot/MessageParser";
import skybotActionProvider from "../../../bots/skybot/ActionProvider";

import "./ExamplesSection.css";

const ExamplesSection = () => {
  return (
    <div className="app-examples-section" id="examples">
      <div className="app-examples-skybot">
        <div className="app-examples-skybot-container">
          <div className="app-examples-skybot">
            <div className="app-examples-skybot-bot-container">
              <Chatbot
                config={skybotConfig}
                messageParser={skybotMessageParser}
                actionProvider={skybotActionProvider}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
