import React from "react";
import "./Product.css";
import "../../fakeDb2";
import Rating from "react-rating";

const Product = (props) => {
  const { name, seller, stock, price, img, star } = props.product;
  return (
    <div className="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="desc">
        <h3 className="head-name">{name}</h3>
        <h4>By {seller} </h4>
        <h2>
          <Rating
            readonly
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            initialRating={star}
          />
        </h2>
        <h4> Only {stock} left</h4>
        <h2> Price {price}</h2>
        <button onClick={() => props.AddToCart(props.product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
