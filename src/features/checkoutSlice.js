import { createSlice } from '@reduxjs/toolkit'

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    orderData: null, 
    isRegistered: false, 
  },
  reducers: {
    setOrder: (state, action) => {
      state.orderData = action.payload
      state.isRegistered = true
    },
  },
})

export const { setOrder } = checkoutSlice.actions
export default checkoutSlice.reducer
