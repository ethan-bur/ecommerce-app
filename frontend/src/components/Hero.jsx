import React from 'react'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='border-gray-100 '>
        <div className="relative z-10 w-full sm:1/2 flex items-center justify-center bg-amber-200">

            <div className='items-bottom'>
                <div className='relative'>
                    <img className='object-contain' src={assets.hero_stock_img}></img>
                    <p className='absolute text-center w-full bottom-1/2 text-3xl font-bold text-white'>Shop our newest collection</p>
                    <button className="absolute content-center align-center w-30 bottom-1/4 bg-white text-black p-2 rounded hover:bg-blue-800 m-2">Shop Now</button>

                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero;