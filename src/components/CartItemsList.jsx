import { useSelector } from 'react-redux'
import CartItem from './CartItem';

const CartItemsList = () => {
  const cartItems=useSelector((state)=>state.cartState.cartItems);



  return (
    <div>
        {
          cartItems.map((item)=>{
            return <CartItem key={item.cardID} cartItem={item}></CartItem>;
          })
        }     
    </div>
  )
}

export default CartItemsList
