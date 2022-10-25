import React, { Fragment, useContext } from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card";
import { ProductsContext } from "../../contexts/products-context";

import "./home.scss";

const Home = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
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
