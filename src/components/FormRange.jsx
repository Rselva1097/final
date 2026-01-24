import React from 'react'
import { formatPrice } from '../utils'

const FormRange = ({label,name,price,size}) => {

    const maxPrice=100000;
    const [selectedPrice,setSelectedPrice]=React.useState(price || maxPrice);

    const handlePrice=(e)=>{
        setSelectedPrice(e.target.value);
    }

  return (
    <div className='form-control'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
        </label>
        <input 
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={handlePrice}
        className={`range range-primary ${size}`}
        />
    </div>
  )
}

export default FormRange
