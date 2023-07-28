import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [candies, updateCandies] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addCandyToCartHandler = (candy) => {
    updateCandies((prevCandies) => {
      const existingCandyIndex = prevCandies.findIndex(
        (prevCandy) => prevCandy.candyId === candy.candyId
      );

      const exisitingCartCandy = prevCandies[existingCandyIndex];
      let updatedCandy;
      let updatedCandies;

      if (exisitingCartCandy) {
        updatedCandy = {
          ...exisitingCartCandy,
          quantity:
            Number(exisitingCartCandy.quantity) + Number(candy.quantity),
        };
        updatedCandies = [...prevCandies];
        updatedCandies[existingCandyIndex] = updatedCandy;
        return updatedCandies;
      } else {
        return [candy, ...prevCandies];
      }
    });
  };

  const removeCandyFromCartHandler = (candy) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount - candy.price;
    });
    updateCandies((prevCandies) => {
      const existingCandyIndex = prevCandies.findIndex(
        (prevCandy) => prevCandy.candyId === candy.candyId
      );

      const exisitingCartCandy = prevCandies[existingCandyIndex];

      let updatedCandies;

      if (exisitingCartCandy.quantity === 1) {
        updatedCandies = prevCandies.filter(
          (filterCandy) => filterCandy.candyId !== exisitingCartCandy.candyId
        );
        return updatedCandies;
      } else {
        const updatedCandy = {
          ...exisitingCartCandy,
          quantity: exisitingCartCandy.quantity - 1,
        };
        updatedCandies = [...prevCandies];
        updatedCandies[existingCandyIndex] = updatedCandy;
        return updatedCandies;
      }
    });
  };

  const totalAmountUpdateHandler = (amount) => {
    updateTotalAmount((prevTotalAmount) => {
      return prevTotalAmount + amount;
    });
  };

  const deleteCandyFromCartHandler = (candy) => {
    updateCandies((prevCandies) => {
      const updatedCandies = prevCandies.filter(
        (prevCandy) => prevCandy.candyId !== candy.candyId
      );
      return updatedCandies;
    });
  };

  const cartContext = {
    candies: candies,
    totalAmount: totalAmount,
    updateTotalAmount: totalAmountUpdateHandler,
    addCandy: addCandyToCartHandler,
    removeCandy: removeCandyFromCartHandler,
    deleteCandy: deleteCandyFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
