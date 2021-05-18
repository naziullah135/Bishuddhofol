import { createContext, useContext, useEffect, useState } from "react"
// const CryptoJS = require("crypto-js");

const MyContext = createContext()

export const useMyContext = () => {
    return useContext(MyContext);
}
// export const encryption = data => {
//     return CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
// }
// export const decryption = data => {
//     const bytes = CryptoJS.AES.decrypt(data, 'secret key 123');
//     return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// }
export const ContextProvider = ({ children }) => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];


    // const [cartItems, setCartItems] = useState([])
    // useEffect(() => {
    //     const carts = JSON.parse(localStorage.getItem('cart')) || [];
    //     setCartItems(carts)
    // }, [cartItems])



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