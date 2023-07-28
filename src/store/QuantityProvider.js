import React, { useState } from "react";
import QuantityContext from "./quantity-context";

const QuantityProvider = (props) => {
  const [candies, updateCandies] = useState([]);

  const addCandyToListHandler = (candy) => {
    updateCandies((prevCandies) => {
      return [candy, ...prevCandies];
    });
  };

  const removeCandyToListHandler = (candy) => {};

  const deleteCandyFromListHandler = (candy) => {
    updateCandies((prevCandies) => {
      const updatedCandies = prevCandies.filter(
        (prevCandy) => prevCandy.candyId !== candy.candyId
      );
      return updatedCandies;
    });
  };

  const quantityContext = {
    candies: candies,
    addCandy: addCandyToListHandler,
    removeCandy: removeCandyToListHandler,
    deleteCandy: deleteCandyFromListHandler,
  };
  return (
    <QuantityContext.Provider value={quantityContext}>
      {props.children}
    </QuantityContext.Provider>
  );
};

export default QuantityProvider;
