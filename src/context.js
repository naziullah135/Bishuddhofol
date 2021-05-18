import { createContext, useContext, useEffect, useState } from "react"


const MyContext = createContext()

export const useMyContext = () => {
    return useContext(MyContext);
}

export const ContextProvider = ({ children }) => {

    const [cartItemCount, setCartItemCount] = useState(0);


    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // const [cartItems, setCartItems] = useState(carts);
    // useEffect(() => {
    //     setCartItems(carts);
    // }, [carts])

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