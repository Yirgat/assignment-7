import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Button } from "react-bootstrap";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card text-center p-3">
      <h5>{product.title}</h5>
      <p>{product.description}</p>
      <h6>{product.price} ETB</h6>
      <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
