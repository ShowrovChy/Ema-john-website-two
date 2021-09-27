import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { AddToDb, getDb } from "../../utilities/fakedb";
import "./Shop.css";

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
    product.quantity = 1;
    const newCart = [...cart, product];
    setCart(newCart);
    AddToDb(product.key);
  };
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  useEffect(() => {
    if (products.length) {
      const savedDb = getDb();
      const addedProduct = [];
      for (const productId in savedDb) {
        const foundPd = products.find((pd) => pd.key === productId);
        const quantity = savedDb[productId];
        foundPd.quantity = quantity;
        addedProduct.push(foundPd);
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
        <i class="< fas fa-search cart-icon"></i>{" "}
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
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
