import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: localStorage.getItem('cartProducts')
    ? JSON.parse(localStorage.getItem('cartProducts'))
    : [],
  reducers: {
    addToCart: (state, { payload }) => {
      const existingProduct = state.find(product => product.id === payload.id)
      if (!existingProduct) {
        state.push({ ...payload, amount: 1 })
      } else {
        existingProduct.amount += 1
      }
      localStorage.setItem('cartProducts', JSON.stringify(state))
    },
    removeFromCart: (state, { payload }) => {
      const newState = state.filter(p => p.id !== payload)
      localStorage.setItem('cartProducts', JSON.stringify(newState))
      return newState
    },
    increaseAmount: (state, { payload }) => {
      const item = state.find(p => p.id === payload)
      if (item) {
        item.amount += 1
      }
      localStorage.setItem('cartProducts', JSON.stringify(state))
    },
    decreaseAmount: (state, { payload }) => {
      const itemIndex = state.findIndex(p => p.id === payload)
      if (itemIndex !== -1) {
        const item = state[itemIndex]
        if (item.amount > 1) {
          item.amount -= 1
        } else {
          state.splice(itemIndex, 1)
        }
      }
      localStorage.setItem('cartProducts', JSON.stringify(state))
    },
    // Mana shu funksiya sizda rasmda yo'q edi, qo'shib qo'ying:
    clearCart: (state) => {
      localStorage.removeItem('cartProducts')
      return []
    },
  },
})

export const { 
  addToCart, 
  removeFromCart, 
  increaseAmount, 
  decreaseAmount, 
  clearCart 
} = productsSlice.actions

export default productsSlice.reducer