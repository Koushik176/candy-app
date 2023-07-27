import React from "react";

const CartContext = React.createContext({
  candies: [],
  totalAmount: 0,
  addCandy: (candy) => {},
  removeCandy: (candy) => {},
  updateTotalAmount: (amount) => {},
});

export default CartContext;
