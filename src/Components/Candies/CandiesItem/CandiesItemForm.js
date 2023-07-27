import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import CartContext from "../../../store/cart-context";

const CandiesItemForm = (props) => {
  const cartCtx = useContext(CartContext);

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

  return (
    <div>
      <Button onClick={addCandyToCart1}>Buy1</Button>
      <Button onClick={addCandyToCart2}>Buy2</Button>
      <Button onClick={addCandyToCart3}>Buy3</Button>
    </div>
  );
};

export default CandiesItemForm;
