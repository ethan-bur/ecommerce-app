import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
const SearchBar = () => {
  
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

    return showSearch ? (
    <div>
        <div>
            <input type='text' placeholder='Search' className='bg-grey-500'></input>
            <img onClick={()=>setShowSearch(false)} src={assets.cart_icon}></img>
        </div>
        <div>
        <img onClick={()=>setShowSearch(true)} src={assets.cart_icon}></img>
        </div>

    </div>
  ): null
}
export default SearchBar