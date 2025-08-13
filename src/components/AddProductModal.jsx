import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productsSlice";

function AddProductModal({ show, handleClose }) {
  const [newProduct, setNewProduct] = useState({ title: "", description: "", price: "" });
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (newProduct.title && newProduct.description && newProduct.price) {
      dispatch(addProduct(newProduct));
      setNewProduct({ title: "", description: "", price: "" });
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProductModal;
