import axios from "axios";
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
    // const [cartItems, setCartItems] = useState([])
    // const cartId = localStorage.getItem('cartId');
    // useEffect(() => {
    //     if (cartId) {
    //         axios.get(`http://localhost:5000/cart/${cartId}`)
    //             .then(res => {
    //                 setCartItems(res.data?.[0].cartItems)
    //             })
    //     }
    // }, [cartId])

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const [cartItemCount, setCartItemCount] = useState(cartItems.length || 0);
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