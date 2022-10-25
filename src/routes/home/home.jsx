import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

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
    <Fragment>
      <Outlet />
      <div className="container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
