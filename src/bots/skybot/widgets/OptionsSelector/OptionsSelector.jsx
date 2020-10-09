import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import "./OptionsSelector.css";

const OptionsSelector = ({ selectedService, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [services, setServices] = useState([]);

  const servicestOptions = [
    {
      serviceID: "1",
      label: "Sistemas",
    },
    {
      serviceID: "2",
      label: "Suporte",
    },
    {
      serviceID: "3",
      label: "Pagamento",
    },
    {
      serviceID: "4",
      label: "Mais informações",
    }
  ];

  useEffect(() => {
    setServices(servicestOptions);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedService: services.find(
        (service) => service.serviceID === e.target.value
      ),
    }));
  };

  const handleConfirm = () => {
    actionProvider.handleOptions();
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!services) return null;

  const createServicesOptions = () => {
    return services.map((item) => {
      return (
        <option key={item.serviceID} value={item.serviceID}>
          {item.label}
        </option>
      );
    });
  };

  return (
    <div className="optionsselector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}
            <h2 className="optionsselector-heading">Tipo de Serviço</h2>
            <select
              className="optionsselector"
              value={selectedService.serviceID}
              onChange={handleSubmit}
            >
              {createServicesOptions()}
            </select>
            <button className="optionsbutton-confirm" onClick={handleConfirm}>
              Selecionar
            </button>
          </>
        }
        elseShow={
          <>
            <h2 className="optionsselector-heading">Serviço</h2>
            <p>
              Ótimo! Você selecionou: {selectedService.label}
            </p>
          </>
        }
      />
    </div>
  );
};

export default OptionsSelector;
