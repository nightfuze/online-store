import React from "react";
import { createContext, useState, useEffect } from "react";

const filterProducts = (products, itemsToFilter, prop) => {
  if (prop === "category") {
    if (!itemsToFilter.length) return products;
    return products.filter((product) =>
      itemsToFilter.includes(product.category)
    );
  }
  if (prop === "rate") {
    if (!itemsToFilter.length) return products;
    return products.filter((product) => product.rating.rate >= itemsToFilter);
  }
  if (prop === "price") {
    if (!Object.keys(itemsToFilter).length) return products;
    const { minPrice, maxPrice } = itemsToFilter;
    return products.filter(
      (product) => product.price <= maxPrice && product.price >= minPrice
    );
  }
};

const getPriceProducts = (products) => {
  return products.map((product) => product.price);
};

export const ProductsContext = createContext({
  products: [],
  minPrice: 0,
  maxPrice: 0,
  filteredProducts: [],
  priceRange: {},
  applyFilters: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({});

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

  useEffect(() => {
    setPriceRange({
      minPrice: Math.min(...getPriceProducts(products)),
      maxPrice: Math.max(...getPriceProducts(products)),
    });
  }, [products]);

  const applyFilters = (categories, rating, selectedPrice) => {
    setFilteredProducts(
      filterProducts(
        filterProducts(
          filterProducts(products, selectedPrice, "price"),
          categories,
          "category"
        ),
        rating,
        "rate"
      )
    );
  };

  const resetFilters = () => setFilteredProducts(products);

  const value = { filteredProducts, applyFilters, resetFilters, priceRange };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
