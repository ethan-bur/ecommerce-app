import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { assets } from '../assets/assets';

const Collection = () => {
  const { products } = useContext(ShopContext); 
  const [showFilter, setShowFilter] = useState(false); 
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value))  {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value))  {
        setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productCopy = products.slice();
    
    if(category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productCopy);
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch(sortType) {
      case 'low-high' :
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;
      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }  

  useEffect(()=> {
    sortProduct();
  },[sortType])

  useEffect(() => {
    setFilterProducts(products)
  }, [])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory])

  
  return (
    <div>
      <div >
        <div className='flex items-center justify-between py-5'>
          <button  onClick={() => setShowFilter(!showFilter)}>
              Filters
          </button>

          <select onChange={(e)=>setSortType(e.target.value)}>
            <option value="relevant">Relevant</option>
            <option value="low-high">Sort by: Low to high</option>
            <option value="high-low">Sort by: High to low</option>
          </select>
        </div>  
        <div className={`${showFilter ? '' : 'hidden'}`}>
          <p>Category</p>
          <div>
            <label>
              <input type="checkbox" value="Men"  onChange={toggleCategory}/> Men
            </label>
            <label>
              <input type="checkbox" value="Woman" onChange={toggleCategory}/> Woman
            </label>
          </div>
        </div>

        
        <div className={`${showFilter ? '' : 'hidden'}`}>
        <p>Type</p>
          <label>
            <input type="checkbox" value="Hoods" onChange={toggleSubCategory} /> Hoods
          </label>
          <label>
            <input type="checkbox" value="Tshirt" onChange={toggleSubCategory} /> Tshirt
          </label>
        </div>
      </div>

      
     

      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {filterProducts.map((item, index) => (
        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
      ))}
    </div>
    </div>
  );
};

export default Collection;
