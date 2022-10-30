import React, { useState } from "react";
import Filters from "../../components/filters/filters";

import Products from "../../components/products/products";
import ToolBar from "../../components/toolbar/toolbar";

import "./home.scss";

const Home = () => {
  const [isShowFilters, setIsShowFilters] = useState(false);

  const toggleFilters = () => setIsShowFilters(!isShowFilters);

  return (
    <div className="container">
      <div className="home-header">
        <ToolBar className="toolbar" toggleFilters={toggleFilters} />
      </div>
      <div className="home-container">
        {isShowFilters && <Filters />}
        <Products />
      </div>
    </div>
  );
};

export default Home;
