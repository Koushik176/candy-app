import React, { useContext } from "react";
import QuantityContext from "../../store/quantity-context";
import CandiesItem from "./CandiesItem/CandiesItem";

const AvailableCandies = (props) => {
  const quantityCtx = useContext(QuantityContext);
  const contextCandiesList = quantityCtx.candies.map((candy) => (
    <CandiesItem
      key={candy.candyId}
      id={candy.candyId}
      name={candy.name}
      description={candy.description}
      price={candy.price}
    />
  ));
  return (
    <section>
      <ul>{contextCandiesList}</ul>
    </section>
  );
};

export default AvailableCandies;
