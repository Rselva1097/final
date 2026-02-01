import React from 'react'
import { useDispatch } from 'react-redux';
import  {generateAmountOptions} from '../utils';
import { editItem, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ cartItem }) => {
    const dispatch=useDispatch();    

    const {cardID,amount,price,company,image,productColor,productID,title} =cartItem;

    

  return (
    <article key={cardID} className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
        <img src={image} alt={title} className='h-24 w-24 rounded-lg object-cover sm:h--32 w-32'/>
        <div className='sm:ml-16 sm:w-48'>
            <h3 className='capitalize font-medium'>{title}</h3>
            <h4 className='capitalize mt-2 text-sm text-neutral-content'>{company}</h4>
            <p className='mt-4 text-sm captialize flex item-center gap-x-2'>
                color :
               <span className='badge badge-sm' style={{background : productColor}}>
               </span> 
            </p>
        </div>
        <div className='sm:ml-12'>
           <div>
             <label htmlFor="amount" className='label p-0'>
               <span className='label-text'>Amount</span>
            </label>
            <select 
            name="amount" 
            id="amount"
             onChange={(e)=>dispatch(editItem({editItemID:cardID,amount:e.target.value}))}
             className='mt-2 select select-base select-bordered select-xs'>
                    {generateAmountOptions(amount + 5)}
            </select>
           </div>

           <button 
           className='mt-2 link link-primary link-hover text-sm'
           onClick={() => dispatch(removeItem({cardID}))}
           >
            Remove
            </button>
        </div>

        <p className='font-medium sm:ml-auto'>{price}</p>
    </article>
  )
}

export default CartItem
