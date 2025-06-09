import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
const SearchBar = () => {
  
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

    return showSearch ? (
    <div className=' text-center border-t border-b border-grey-500 bg-gray-1 00 '>
        <div className='inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input type='text' placeholder='Search' className='outline-none w-full'></input>
            <img className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(true)} src={assets.search_icon}></img>
        </div>
        <img className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)} src={assets.close_icon}></img>            
            
        

    </div>
  ): null
}
export default SearchBar