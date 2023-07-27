import React, { useState } from "react";
import QuantityContext from "./quantity-context";

const QuantityProvider = (props) => {
    const [candies, updateCandies] = useState([]);

    const addCandyToListHandler = (candy) => {
        updateCandies((prevCandies) => {
            return [candy, ...prevCandies];
        })
    };

    const removeCandyToListHandler = (candy) => {
    };

    const quantityContext = {
        candies: candies,
        addCandy: addCandyToListHandler,
        removeCandy: removeCandyToListHandler,
    }
    return <QuantityContext.Provider value={quantityContext}>
        {props.children}
    </QuantityContext.Provider>
};

export default QuantityProvider;