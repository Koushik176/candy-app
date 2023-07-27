import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import QuantityContext from "../../store/quantity-context";
import CartItem from "./CartItem";
import Button from "../UI/Button/Button";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityCtx = useContext(QuantityContext);

  const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul>
      {cartCtx.candies.map((candy) => (
        <CartItem
          key={candy.candyId}
          name={candy.name}
          amount={candy.quantity}
          price={candy.price}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div>
        <span>totalAmount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <Button>Close</Button>
        <Button>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
