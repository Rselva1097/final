import React from 'react'
import { use } from 'react'
import { useSelector } from 'react-redux'

const CartTotal = () => {

    const {cartTotal,orderTotal,shipping,tax}=useSelector((state)=>state.cartState);

  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'> 
            <span>subtotal</span>
            <span className='font-medium'>Rs {cartTotal} </span>
        </p>
         <p className='flex justify-between text-xs border-b border-base-300 pb-2'> 
            <span>tax</span>
            <span className='font-medium'>Rs {tax} </span>
        </p>
         <p className='flex justify-between text-xs border-b border-base-300 pb-2'> 
            <span>shipping</span>
            <span className='font-medium'>Rs {shipping} </span>
        </p>
      </div>

      
    </div>
  )
}

export default CartTotal
