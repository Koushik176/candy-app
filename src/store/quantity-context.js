import React from "react";

const QuantityContext = React.createContext({
  candies: [],
  addCandy: (candy) => {},
  removeCandy: (candy) => {},
  deleteCandy: (candy) => {},
});

export default QuantityContext;
