import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(props.cart);

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
        <i class="fas fa-shopping-cart"></i>
        {totalQuantity}
      </h1>

      <h3>Total : {total.toFixed(2)}</h3>
      <h3>Shipping :{shipping} </h3>
      <h3>Tax : {tax.toFixed(2)} </h3>
      <h3>Grand Total : {grandTotal.toFixed(2)} </h3>
    </div>
  );
};
export default Cart;
