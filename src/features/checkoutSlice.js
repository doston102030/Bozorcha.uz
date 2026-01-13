import { createSlice } from '@reduxjs/toolkit'

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    orderData: null,
    isRegistered: false,
  },
  reducers: {
    setOrder: (state, action) => {
      
     
      if (
        action.payload &&
        action.payload.phone &&
        action.payload.phone.trim().length >= 9
      ) {
        state.orderData = action.payload
        state.isRegistered = true
      } else {
 
        state.orderData = null
        state.isRegistered = false
        console.warn("Redux: Telefon raqami noto'g'ri, buyurtma saqlanmadi.")
      }
    },
    resetOrder: state => {
      state.orderData = null
      state.isRegistered = false
    },
  },
})

export const { setOrder, resetOrder } = checkoutSlice.actions
export default checkoutSlice.reducer
