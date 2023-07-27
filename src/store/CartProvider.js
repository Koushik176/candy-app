import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const[candies, updateCandies] = useState([]);
    const[totalAmount, updateTotalAmount] = useState(0);

    const addCandyToCartHandler = (candy) => {
        updateCandies((prevCandies) => {
            return [candy, ...prevCandies];
        })
    };

    const removeCandyFromCartHandler = (candy) => {};

    const totalAmountUpdateHandler = (amount) => {
        updateTotalAmount((prevTotalAmount) => {
            return prevTotalAmount + amount;
        });
    };

    const cartContext = {
        candies: candies,
        totalAmount: totalAmount,
        updateTotalAmount: totalAmountUpdateHandler,
        addCandy: addCandyToCartHandler,
        removeCandy: removeCandyFromCartHandler,
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;