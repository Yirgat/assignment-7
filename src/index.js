import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
