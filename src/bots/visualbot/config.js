import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import OptionsSelector from "./widgets/OptionsSelector/OptionsSelector";
import ChoiceSelector from "./widgets/ChoiceSelector/ChoiceSelector";
import ListOptions from "./widgets/ListOptions/ListOptions";
import GeneralOptions from "./widgets/GeneralOptions/GeneralOptions";
import OptionsButtons from "./widgets/OptionsButtons/OptionsButtons";
import LinkOption from "./widgets/Link/LinkOption";
import BotAvatar from "./domainComponents/BotAvatar";

const botName = "VisualBot";

const config = {
  botName: botName,
  lang: "pt-BR",
  initialMessages: [
    createChatBotMessage(`Olá, eu sou o ${botName}.`),
    createChatBotMessage(
      "Primeiramente, para qual tipo de serviço você está buscando informação?",
      {
        widget: "optionsSelector",
        delay: 500,
      }
    ),
  ],
  state: {
    airports: [],
    selectedService: { serviceID: "1", label: "Sistemas" },
    optionType: "",
    selectedOptionId: "",
    selectedOption: null,
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "optionsSelector",
      widgetFunc: (props) => <OptionsSelector {...props} />,
      mapStateToProps: ["messages", "selectedService", "airports"],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "choice",
      widgetFunc: (props) => <ChoiceSelector {...props} />,
      mapStateToProps: ["selectedService"],
    },
    {
      widgetName: "listOptions",
      widgetFunc: (props) => <ListOptions {...props} />,
      mapStateToProps: ["optionType", "selectedService"],
    },
    {
      widgetName: "optionsButtons",
      widgetFunc: (props) => <OptionsButtons {...props} />,
    },
    {
      widgetName: "linkOption",
      widgetFunc: (props) => <LinkOption {...props} />,
      mapStateToProps: ["selectedService"],
    }
  ],
};

export default config;
