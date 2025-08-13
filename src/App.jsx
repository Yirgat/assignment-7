import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartTable from "./components/CartTable";
import AddProductModal from "./components/AddProductModal";
import { Button } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Products</h2>

      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" onClick={() => setShow(true)}>
          Add Product
        </Button>
      </div>
      <ProductList />
      <CartTable />
      <AddProductModal show={show} handleClose={() => setShow(false)} />
    </div>
  );
}

export default App;
