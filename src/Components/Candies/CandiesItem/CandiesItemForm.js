import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import CartContext from "../../../store/cart-context";
import QuantityContext from "../../../store/quantity-context";

const CandiesItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const quantityCtx = useContext(QuantityContext);

  const addCandyToCart1 = (event) => {
    event.preventDefault();
    const quantity = 1;
    cartCtx.addCandy({
      ...props.candy,
      quantity: quantity,
      candyId: props.candyId,
    });
    const cartPrice = props.candy.price * quantity;
    cartCtx.updateTotalAmount(cartPrice);
  };

  const addCandyToCart2 = (event) => {
    event.preventDefault();
    const quantity = 2;
    cartCtx.addCandy({
      ...props.candy,
      quantity: quantity,
      candyId: props.candyId,
    });
    const cartPrice = props.candy.price * quantity;
    cartCtx.updateTotalAmount(cartPrice);
  };

  const addCandyToCart3 = (event) => {
    event.preventDefault();
    const quantity = 3;
    cartCtx.addCandy({
      ...props.candy,
      quantity: quantity,
      candyId: props.candyId,
    });
    const cartPrice = props.candy.price * quantity;
    cartCtx.updateTotalAmount(cartPrice);
  };

  const deleteCandyFromCart = (event) => {
    event.preventDefault();
    localStorage.removeItem(props.candyId);
    quantityCtx.deleteCandy({
      ...props.candy,
      candyId: props.candyId,
    });
    cartCtx.deleteCandy({
      ...props.candy,
      candyId: props.candyId,
    });
  };

  return (
    <div>
      <Button onClick={addCandyToCart1}>Buy1</Button>
      <Button onClick={addCandyToCart2}>Buy2</Button>
      <Button onClick={addCandyToCart3}>Buy3</Button>
      <Button onClick={deleteCandyFromCart}>Delete</Button>
    </div>
  );
};

export default CandiesItemForm;
