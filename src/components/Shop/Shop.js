import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { AddToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const getSearchText = (e) => {
    const searchedProduct = e.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchedProduct.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };
  const AddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
      // newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    AddToDb(product.key);
  };
  useEffect(() => {
    fetch("/products.json")
      /*     fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    ) */
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  useEffect(() => {
    if (products.length) {
      const savedDb = getStoredCart();
      const addedProduct = [];
      for (const productId in savedDb) {
        const foundPd = products.find((pd) => pd.key === productId);
        if (foundPd) {
          const quantity = savedDb[productId];
          foundPd.quantity = quantity;
          addedProduct.push(foundPd);
        }
      }
      setCart(addedProduct);
    }
  }, [products]);

  return (
    <div className=" grand-container">
      <div className=" input-container">
        <input
          onChange={getSearchText}
          className="input-field"
          type="text"
          placeholder="Search Product"
        />
        <i className="< fas fa-search cart-icon"></i>{" "}
        <span className="count"> {displayProducts.length}</span>
      </div>
      <div className="container-shop">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              AddToCart={AddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} className="button-style">
            <Link to="/review">
              <button className="button-style">Review Your Item</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
