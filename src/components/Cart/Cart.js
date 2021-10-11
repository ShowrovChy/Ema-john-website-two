import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  const total = cart.reduce((prev, curr) => prev + curr.price, 0);
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  return (
    <div className="cart">
      <h1 className="heading">Order Summary </h1>

      {/*  <h1 className="heading-cart">
        <i class="fas fa-shopping-cart"></i>
        {props.cart.length}{" "}
      </h1> */}
      <h1 className="heading-cart">
        <i className="fas fa-shopping-cart"></i>
        {totalQuantity}
      </h1>

      <h3>
        Total :{" "}
        <span style={{ marginLeft: "60px", color: "blue" }}>
          {total.toFixed(2)}
        </span>
      </h3>
      <h3>
        Shipping :
        <span style={{ marginLeft: "29px", color: "blue" }}>{shipping}</span>
      </h3>
      <h3>
        Tax :{" "}
        <span style={{ marginLeft: "77px", color: "blue" }}>
          {tax.toFixed(2)}
        </span>
      </h3>
      <h3>
        Grand Total :{" "}
        <span style={{ marginLeft: "5px", color: "blue" }}>
          {grandTotal.toFixed(2)}
        </span>
      </h3>
      <div style={{ textAlign: "center" }}>{props.children}</div>
    </div>
  );
};
export default Cart;
