import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: "Herbal Shampoo", description: "Gentle cleansing shampoo with natural herbs.", price: 250 },
  { id: 2, title: "Conditioner", description: "Nourishing conditioner that detangles and shiny hair.", price: 300 },
  { id: 3, title: "Argan Hair Oil", description: "Lightweight oil infused to repair split ends hair.", price: 350 },
  { id: 4, title: "Anti-Frizz Serum", description: "Smooth serum that tames frizz hair all day.", price: 250 },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: state.length + 1,
        ...action.payload,
        price: Number(action.payload.price)
      });
    }
  }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;