import React from "react";

import "./ChoiceSelector.css";

const FlightsSelector = (props) => {
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
      <h1 className="flight-selector-header">Sim ou não?</h1>
      <div className="flight-selector-button-container">
        <button
          className="flights-selector-button"
          onClick={() => setType(true)}
        >
          Sim
        </button>
        <button
          className="flights-selector-button"
          onClick={() => setType(false)}
        >
          Não
        </button>
      </div>
    </div>
  );
};

export default FlightsSelector;
