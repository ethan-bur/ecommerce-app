import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {

  
  


  const [visible, setVisible] = useState(false);

  const {setShowSearch} = useContext(ShopContext)
   
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <title>Fable | Mens</title>
        <Link to='/'>
            <img src={assets.company_logo} className='flex items-center w-50' alt="company logo"/>
        </Link>
        <ul className='hidden sm:flex gap-5 test-sm text-gray-700'>
            <NavLink to='/' className='flex felx-col items-center gap-1 '>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
            </NavLink>
            <NavLink to='/collection' className='flex felx-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex felx-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex felx-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            
        </ul>

        <div className='flex items-center gap-6'>
            
            <div className='group relative'>
            <img src={assets.profile_icon} className='w-5 min-w-5'/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Order</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart icon"/>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[8px]'>0</p>
                                    
            </Link>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className=''></img>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'></img>

            

            <img src={assets.fav_icon} className='w-5 min-w-5' alt="cart icon"/>
        </div>
        {/* Side Bar Menu */}
        {/* <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}> */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} z-50`}>


           <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img  className='h-4 rotate-180' src={assets.profile_icon}/>
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border'} to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border'} to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border'} to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 border'} to='/contact'>Contact</NavLink>
           </div>
        </div>
    </div>
  )
}

export default NavBar