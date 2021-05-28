import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { auth, googleProvider } from "./lib/firebase";


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

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const googleSignIn = () => {
        return auth.signInWithPopup(googleProvider);
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])
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

    const [updatedCart, setUpdatedCart] = useState([])
    const [cartItemCount, setCartItemCount] = useState(cartItems.length || 0);
    const [addresses, setAddresses] = useState([]);
    const [currentAddress, setCurrentAddress] = useState({});
    const value = {
        currentUser,
        setCurrentUser,
        signup,
        login,
        googleSignIn,
        logout,
        cartItemCount,
        setCartItemCount,
        cartItems,
        updatedCart,
        setUpdatedCart,
        addresses,
        setAddresses,
        currentAddress,
        setCurrentAddress
    }
    return (
        <MyContext.Provider value={value}>
            {!loading && children}
        </MyContext.Provider>
    )
}