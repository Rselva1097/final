import React from 'react'
import SectionTitle from './SectionTitle';
import ProductGrid from './ProductGrid';

const FeaturedProduct = () => {
  return (
    <div className='mt-8'>
      <SectionTitle text='Featured Product'/>
      <ProductGrid  />
    </div>
  )
}

export default FeaturedProduct
