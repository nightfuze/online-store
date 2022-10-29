import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";
import ProductCard from "../product-card/product-card";

import "./products.scss";

const Products = () => {
  const { filteredProducts } = useContext(ProductsContext);
  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
