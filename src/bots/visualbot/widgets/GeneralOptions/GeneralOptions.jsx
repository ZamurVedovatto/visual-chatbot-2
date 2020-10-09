import React from "react";

import OptionsButtons from "../OptionsButtons/OptionsButtons";

const GeneralOptions = props => {
  const options = [
    {
      name: "Choice",
      handler: props.actionProvider.handleChoiceOptions,
      id: 1
    },
    { 
      name: "Link",
      handler: props.actionProvider.handleSendLink,
      id: 2
    },
    {
      name: "Buttons",
      handler: props.actionProvider.handleOptionsButtons,
      id: 3
    },
    {
      name: "Selection",
      handler: props.actionProvider.handleOptionsSelector,
      id: 5
    }
  ];
  return <OptionsButtons options={options} title="Não entendi. Como posso ajuda-lo?" {...props} />;
};

export default GeneralOptions;
