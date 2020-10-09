import React from "react";

import Link from "./Link";

const ManageParkingLink = ({ selectedService }) => {
  const getUrl = () => {
    return `https://avinor.no/en/ManageBooking/${selectedService.serviceID}`;
  };

  return <Link url={getUrl()} title={"manage parking on Avinor.no"} />;
};

export default ManageParkingLink;
