import React from "react";
import { createContext, useState, useEffect } from "react";

const filterProducts = (products, itemsToFilter) => {
  return products.filter((product) => itemsToFilter.includes(product.category));
};

export const ProductsContext = createContext({
  products: [],
  filteredProducts: [],
  categoriesFilter: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log({ filteredProducts });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    getData();
  }, []);

  const categoriesFilter = (categories) => {
    categories.length
      ? setFilteredProducts(filterProducts(products, categories))
      : setFilteredProducts(products);
  };

  const value = { filteredProducts, categoriesFilter };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
