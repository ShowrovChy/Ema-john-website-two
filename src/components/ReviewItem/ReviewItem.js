import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, price, quantity, key } = props.product;
  // const { handleRemove } = props;
  return (
    <div className="item-style">
      <h4 className="item-Name">{name}</h4>
      <h4 className="item-price"> Price : {price}</h4>
      <h5 className="item-quantity"> Quantity : {quantity}</h5>
      <button className="button-style" onClick={() => props.handleRemove(key)}>
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
