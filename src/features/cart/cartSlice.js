import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
 

console.log('create slice :',createSlice);


const cartSlice = createSlice({
  name: 'cart',
  initialState:defaultState,
  reducers:{
    addItem:(state,action)=>{

      const {product}=action.payload;

      state.numItemsInCart+=product.amount;
      state.cartTotal+=product.amount * product.price;
      state.orderTotal+=state.cartTotal + state.shipping + state.tax;
      state.cartItems.push(product);
      toast.success('Item added to cart');
    },
    clearCart:()=>{
       console.log('clear cart ');

    },
    removeItem:()=>{
       console.log('remove item ');
    
    },
    editItem:()=>{
        console.log('edit item ');
    }
  }
   
});

console.log('cart slice : ',cartSlice);
export const {addItem,clearCart,removeItem,editItem}=cartSlice.actions;
 
export default cartSlice.reducer;
