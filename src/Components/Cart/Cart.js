import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
//import QuantityContext from "../../store/quantity-context";
import CartItem from "./CartItem";
import Button from "../UI/Button/Button";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  //const quantityCtx = useContext(QuantityContext);

  const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (candy) => {
    cartCtx.removeCandy(candy);
  };

  const cartItemAddHandler = (candy) => {
    cartCtx.addCandy({ ...candy, quantity: 1 });
    cartCtx.updateTotalAmount(Number(candy.price));
  };

  const cartItems = (
    <ul>
      {cartCtx.candies.map((candy) => (
        <CartItem
          key={candy.candyId}
          name={candy.name}
          amount={candy.quantity}
          price={candy.price}
          onRemove={cartItemRemoveHandler.bind(null, candy)}
          onAdd={cartItemAddHandler.bind(null, candy)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span> {totalAmount}</span>
      </div>
      <div>
        <Button onClick={props.onClose}>Close</Button>
        <Button>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
