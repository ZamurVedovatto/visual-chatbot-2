import React from "react";

import Link from "./Link";

const LinkOption = () => {
  const getUrl = () => {
    return `https://avinor.no/en/airport/practical-information/lost-baggage/`;
  };

  return <Link url={getUrl()} title={"lost baggage on Avinor.no"} />;
};

export default LinkOption;
