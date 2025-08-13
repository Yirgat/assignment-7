import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useSelector((state) => state.products);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
