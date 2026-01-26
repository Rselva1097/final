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
 
const getCartFromLocalStorage=()=>{
  const cart=localStorage.getItem('cartItems');
  return cart ? JSON.parse(cart) : defaultState;
}

console.log('create slice :',createSlice);


const cartSlice = createSlice({
  name: 'cart',
  initialState:getCartFromLocalStorage(),
  reducers:{
    addItem:(state,action)=>{

      const {product}=action.payload;

      const exisitingItem=state.cartItems.find((item)=> item.cardID===product.cardID);
     
      if(exisitingItem)state.amount+=product.amount;
      else state.cartItems.push(product);

      state.numItemsInCart+=product.amount;
      state.cartTotal+=product.amount * product.price;
      state.orderTotal+=state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cartItems',JSON.stringify(state))
      toast.success('Item added to cart ');
    },
    clearCart:(state)=>{
       state.cartItems=[];
       state.numItemsInCart=0;
       state.cartTotal=0;
       state.orderTotal=0;
       localStorage.setItem('cartItems',JSON.stringify(state))

       toast.success('Items in the cart is cleared ');
    },
    removeItem:(state,action)=>{
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
