import React from "react";
import { useState, useEffect } from "react";

import ProductCard from "../../components/product-card/product-card";

import "./home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
