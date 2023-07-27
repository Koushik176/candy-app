import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;

  cartCtx.candies.forEach((candy) => {
    quantity = quantity + Number(candy.quantity);
  });
  return (
    <button onClick={props.onClick}>
      <span>Cart</span>
      <span>({quantity})</span>
    </button>
  );
};

export default HeaderCartButton;
