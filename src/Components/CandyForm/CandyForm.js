import React, { useContext, useState } from "react";
import Button from "../UI/Button/Button";
import QuantityContext from "../../store/quantity-context";

const CandyForm = (props) => {
  const quantityCtx = useContext(QuantityContext);
  const [enteredCandyName, setEnteredCandyName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const candyNameChangeHandler = (event) => {
    setEnteredCandyName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const candyData = {
      candyId: enteredCandyName,
      name: enteredCandyName,
      description: enteredDescription,
      price: enteredPrice,
    };
    localStorage.setItem(enteredCandyName, JSON.stringify(candyData));
    quantityCtx.addCandy(candyData);
    setEnteredCandyName("");
    setEnteredDescription("");
    setEnteredPrice("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="candyname">Candy Name</label>
        <input
          id="candyname"
          type="text"
          value={enteredCandyName}
          onChange={candyNameChangeHandler}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          min="1"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <Button type="submit">Add Candy</Button>
      </form>
    </div>
  );
};

export default CandyForm;
