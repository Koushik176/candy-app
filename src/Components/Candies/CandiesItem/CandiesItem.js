import React from "react";
import CandiesItemForm from "./CandiesItemForm";

const CandiesItem = (props) => {
  const price = `Rs. ${Number(props.price).toFixed(2)}`;
  return (
    <li>
      <div>
        <h4>{props.name}</h4>
        <div>{props.description}</div>
        <div>{price}</div>
        <CandiesItemForm candyId={props.id} candy={props} />
      </div>
    </li>
  );
};

export default CandiesItem;
