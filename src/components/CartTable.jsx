import React from "react";
import { useSelector } from "react-redux";

function CartTable() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <h2 className="text-center mt-5">Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.price} ETB</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className="text-end">Total Price = {totalPrice} ETB</h5>
    </>
  );
}

export default CartTable;
