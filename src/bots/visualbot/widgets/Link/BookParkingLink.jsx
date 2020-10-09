import React from "react";

import Link from "./Link";

const BookParkingLink = ({ selectedService }) => {
  const getUrl = () => {
    return `https://avinor.no/en/airport/${selectedService.label}-airport/parking/`;
  };

  return <Link url={getUrl()} title={"book parking on Avinor.no"} />;
};

export default BookParkingLink;
