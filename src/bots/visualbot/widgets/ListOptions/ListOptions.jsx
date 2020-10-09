import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import { getListData } from "../../data/data";

import "./ListOptions.css";

const ListOptions = ({ selectedService, scrollIntoView }) => {
  const [listOptions, setListOptions] = useState([]);

  useEffect(() => {
    const getListOptions = async () => {
      const listOptions = await getListData(selectedService.serviceID);
      const filteredListOptions = listOptions.filter((item) => item.status !== false);
      setListOptions(filteredListOptions);
    };
    getListOptions();
  }, []);

  useEffect(() => {
    scrollIntoView();
  });

  const listOptionsSlice = listOptions.slice(0, 5);

  return (
    <div className="listoptions-container">
      <div className="listoption-header-container">
        <div className="listoption-id-header">Id</div>
        <div className="listoption-time-header">Label1</div>
        <div className="listoption-time-gate">Label2</div>
      </div>
      <ul className="listoptions">
        {listOptionsSlice.map((listOption) => {
          return (
            <li className="listoptions-item" key={listOption.id}>
              <div className="listoption-id">{listOption.id}</div>
              <div className="listoption-time">{listOption.label}</div>
              <div className="listoption-gate">{listOption.anotherLabel}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOptions;
