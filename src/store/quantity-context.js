import React from "react";

const QuantityContext = React.createContext({
    candies: [],
    addCandy: (candy) => {},
    removeCandy: (candy) => {},
});

export default QuantityContext;