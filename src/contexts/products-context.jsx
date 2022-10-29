import React from "react";
import { createContext, useState, useEffect } from "react";

const filterProducts = (products, itemsToFilter, prop) => {
  if (prop === "category") {
    if (!itemsToFilter.length) return products;
    return products.filter((product) =>
      itemsToFilter.includes(product.category)
    );
  }
  if (prop === "rating") {
    return products.filter((product) => product.rating.rate >= itemsToFilter);
  }
};

export const ProductsContext = createContext({
  products: [],
  filteredProducts: [],
  applyFilters: () => {},
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

  const applyFilters = (categories, rating) => {
    setFilteredProducts(
      filterProducts(
        filterProducts(products, categories, "category"),
        rating,
        "rating"
      )
    );
    // setFilteredProducts(filterProducts(filteredProducts, rating, "rating"));
  };

  const resetFilters = () => setFilteredProducts(products);

  const value = { filteredProducts, applyFilters, resetFilters };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
