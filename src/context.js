import { createContext, useContext, useEffect, useState } from "react"


const MyContext = createContext()

export const useMyContext = () => {
    return useContext(MyContext);
}

export const ContextProvider = ({ children }) => {

    // const [cartItems, setCartItems] = useState([])
    // useEffect(() => {
    //     const carts = JSON.parse(localStorage.getItem('cart')) || [];
    //     setCartItems(carts)
    // }, [cartItems])


    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const [cartItemCount, setCartItemCount] = useState(cartItems);
    const value = {
        cartItemCount,
        setCartItemCount,
        cartItems
    }
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}