import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import OptionsSelector from "./widgets/OptionsSelector/OptionsSelector";
import ChoiceSelector from "./widgets/ChoiceSelector/ChoiceSelector";
import ListOptions from "./widgets/ListOptions/ListOptions";
import SingleFlight from "./widgets/SingleFlight/SingleFlight";
import GeneralOptions from "./widgets/GeneralOptions/GeneralOptions";
import OptionsButtons from "./widgets/OptionsButtons/OptionsButtons";
import BookParkingLink from "./widgets/Link/BookParkingLink";
import ManageParkingLink from "./widgets/Link/ManageParkingLink";
import LostBaggageLink from "./widgets/Link/LostBaggageLink";
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
    flightType: "",
    selectedFlightId: "",
    selectedFlight: null,
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
      widgetName: "flightSelector",
      widgetFunc: (props) => <ChoiceSelector {...props} />,
      mapStateToProps: ["selectedService"],
    },
    {
      widgetName: "listOptions",
      widgetFunc: (props) => <ListOptions {...props} />,
      mapStateToProps: ["flightType", "selectedService"],
    },
    {
      widgetName: "singleFlight",
      widgetFunc: (props) => <SingleFlight {...props} />,
      mapStateToProps: [
        "selectedFlightId",
        "selectedService",
        "selectedFlight",
      ],
    },
    {
      widgetName: "optionsButtons",
      widgetFunc: (props) => <OptionsButtons {...props} />,
    },
    {
      widgetName: "bookParkingLink",
      widgetFunc: (props) => <BookParkingLink {...props} />,
      mapStateToProps: ["selectedService"],
    },
    {
      widgetName: "manageParkingLink",
      widgetFunc: (props) => <ManageParkingLink {...props} />,
      mapStateToProps: ["selectedService"],
    },
    {
      widgetName: "lostLuggageLink",
      widgetFunc: (props) => <LostBaggageLink {...props} />,
    },
  ],
};

export default config;
