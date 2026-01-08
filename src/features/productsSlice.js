import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    initialState: [],
    name: "products", 
    reducers: {
         addToCart: (state, {payload})=> {
            return !state.find((products) => products.id == payload.id) ? [...state, 
                    {...payload, amount: 1}] : state.map((product) => product.id === payload.id 
                    ? {...product, amount: product.amount +1} : product) ;
         },
    },
});


export const {addToCart} = productsSlice.actions;
export default productsSlice.reducer