import React from "react";

import "./ChoiceSelector.css";

const ChoiceSelector = (props) => {
  const { setState, actionProvider } = props;

  const setType = async (type) => {
    setState((state) => ({
      ...state,
      choiceType: type,
    }));

    actionProvider.handleTypeChoice(type);
  };

  return (
    <div>
      <h1 className="choice-selector-header">Sim ou não?</h1>
      <div className="choice-selector-button-container">
        <button
          className="choices-selector-button"
          onClick={() => setType(true)}
        >
          Sim
        </button>
        <button
          className="choices-selector-button"
          onClick={() => setType(false)}
        >
          Não
        </button>
      </div>
    </div>
  );
};

export default ChoiceSelector;
