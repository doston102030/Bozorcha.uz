
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  initialState: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  name: "products",
  reducers: {
    addToCart: (state, { payload }) => {
      const cartProducts = !state.find((products) => products.id == payload.id)
        ? [...state, { ...payload, amount: 1 }]
        : state.map((product) =>
            product.id === payload.id
              ? { ...product, amount: product.amount + 1 }
              : product
          );
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      return cartProducts;
    },
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
