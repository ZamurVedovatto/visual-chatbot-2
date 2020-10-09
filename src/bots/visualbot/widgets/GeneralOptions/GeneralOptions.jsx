import React from "react";

import OptionsButtons from "../OptionsButtons/OptionsButtons";

const GeneralOptions = props => {
  const options = [
    {
      name: "Implantação de novo sistema",
      handler: props.actionProvider.handleFlightsChoice,
      id: 1
    },
    { 
      name: "Opções disponíveis",
      handler: props.actionProvider.handleLostLuggage,
      id: 2
    },
    {
      name: "Atualização de versão",
      handler: props.actionProvider.handleOptionsButtons,
      id: 3
    },
    {
      name: "Trocar opção de atendimento",
      handler: props.actionProvider.handleOptionsSelector,
      id: 5
    }
  ];
  return <OptionsButtons options={options} title="Como posso ajuda-lo?" {...props} />;
};

export default GeneralOptions;
