
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  reducers: {
    addToCart: (state, { payload }) => {
      const existingProduct = state.find((product) => product.id === payload.id);

      if (!existingProduct) {
        state.push({ ...payload, amount: 1 });
      } else {
        existingProduct.amount += 1;
      }
      
      // Redux Toolkitda 'state'ni o'zini o'zgartirish (mutate) mumkin, 
      // lekin localStorage uchun yangi holatni saqlash kerak:
      localStorage.setItem("cartProducts", JSON.stringify(state));
    },
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;