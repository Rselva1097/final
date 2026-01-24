import React from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouseImage=[hero1,hero2,hero3,hero4]


const Hero = () => {
  return (
    
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
       <div >
          <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>we're changing the way people shop </h1>
          <p className='mt-8 max-w-xl leading-8 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam tenetur repellat et quia eos quisquam quod nisi provident qui tempore, voluptatem dolore id consequuntur deserunt tempora aliquid mollitia inventore?</p>
          <div className='mt-10'>
          <Link to='/products' className='btn btn-primary '>our product's</Link>
          </div>
       </div>
       <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
             {
                carouseImage.map((image,index)=>{
                    return(
                      <div key={index} className='carousel-item'>
                        <img src={image} className='rounded-box h-full w-80 object-cover'></img>
                      </div>
                    )
                })
             }
       </div>
    </div>
  )
}

export default Hero
