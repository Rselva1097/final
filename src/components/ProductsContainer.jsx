import React, { useState } from 'react'
import ProductList from './ProductList'
import { useLoaderData } from 'react-router-dom'
import {BsFillGridFill,BsList} from 'react-icons/bs'
import ProductGrid from './ProductGrid'


const ProductsContainer = () => {

  const {metaData}=useLoaderData();
  const [layout,setLayout]=useState('grid')
  const totalProductCnt=metaData.pagination.total;
  
  console.log('meta data : ',metaData);

  const setActiveStyles=(currentLayout)=>{

    return `
    text-xl btn btn-circle  btn-md ${
      layout === currentLayout ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'
    }
    `;
  }


  return (
    <>
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
      <h4 className='font-medium text-md'>{totalProductCnt} product{totalProductCnt > 1 && 's'}</h4>
      <div >
        <button 
        className={setActiveStyles('grid')}
        onClick={()=> setLayout('grid')}>
          <BsFillGridFill></BsFillGridFill>
        </button>

        <button
        className={setActiveStyles('list')}
        onClick={()=> setLayout('list')}>
          <BsList></BsList>
        </button>
      </div>
    </div>

    <div>
       {
        layout === 'grid' ? (<ProductGrid></ProductGrid>) : (<ProductList></ProductList>)
       }
    </div>
    </>
  )
}

export default ProductsContainer
