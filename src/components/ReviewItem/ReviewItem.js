import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, key } = props.product;
  const { handleRemove } = props;
  return (
    <div>
      <h3>{name}</h3>
      <h6>{price}</h6>
      <p>{quantity}</p>
      <button onClick={() => handleRemove(key)}></button>
    </div>
  );
};

export default ReviewItem;
