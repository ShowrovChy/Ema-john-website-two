import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
  };
  return (
    <div className="container-shop">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem key={product.key} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart key={cart.key} cart={cart} handleRemove={handleRemove}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
