import React from "react";
import Filters from "../../components/filters/filters";

import Products from "../../components/products/products";

import "./home.scss";

const Home = () => {
  return (
    <div className="container">
      <Filters />
      <Products />
    </div>
  );
};

export default Home;
