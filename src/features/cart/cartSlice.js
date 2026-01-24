import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
 

const cartSlice = createSlice({
  name: 'cart',
  initialState:defaultState,
   
});
 
export default cartSlice.reducer;
