import { createContext, useState } from "react"
import {products} from '../assets/assets'

export const ShopContext = createContext();

const ShopContextProvider = (props) => { 

    const currency = '$';

    const [showSearch, setShowSearch] = useState(false)

    const value = {
        products, currency, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;