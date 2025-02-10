import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import NewsLetterSignUp from './NewsLetterSignUp'
const Footer = () => {
    return (
      <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 gap-y-6 p-6'>
          <div>
            <img src={assets.company_logo} className='w-40' alt="Company logo" />
            <p className='text-xs'>
              Fablwe – Refining street fashion with effortless style, trendy, comfy, and bold apparel for individuals who dare to be different.
            </p>
          </div>
          <div>
            <h1 className='font-bold'>Company</h1>
            <ul>
              <li className='hover:text-yellow-300'><Link to="/">Home</Link></li>
              <li className='hover:text-yellow-300'><Link to="/about">About Us</Link></li>
              <li className='hover:text-yellow-300'><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold'>Fablwe</h1>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold'>Fablwe Club</h1>
            <div className='border-b-1'>
              <NewsLetterSignUp />
            </div>
          </div>
        </div>
        <div className="text-center py-4 bg-gray-300">
          <p className="text-sm">&copy; {new Date().getFullYear()} Fable. All rights reserved.</p>
        </div>
      </div>
    );
  };
  

export default Footer