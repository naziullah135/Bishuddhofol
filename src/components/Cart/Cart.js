import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Button, Typography, Paper, Grid } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context';
import CheckoutSummary from '../Checkout/CheckoutSummary';
import CartSingle from './CartSingle';
import { useStyles } from './CartStyle';
const Cart = () => {
    const { cartItems, cartItemCount, setUpdatedCart } = useMyContext();
    // const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // const cartItemsId = cartItems.map(item => item.id);
    const [cartData, setCartData] = useState([])
    // const [isChangeCart, setIsChangeCart] = useState(false)
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const cartItemsId = cartItems.map(item => item.id);
        axios.post('http://localhost:5000/fruitsById', cartItemsId)
            .then(res => {
                setCartData(res.data)
            })
    }, [cartItems])

    const deliveryCharge = 20;

    const changeCart = (id, increase) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        const newCart = cartItems.map(item => (item.id === id) ? { ...item, quantity: increase ? item.quantity + 1 : item.quantity > 5 ? item.quantity - 1 : 5 } : item)
        localStorage.setItem('cartItems', JSON.stringify(newCart))
        // setIsChangeCart(true)
    }

    // update quantity 
    useEffect(() => {
        const newCartItems = cartData.map(item => {
            cartItems.map(cartItem => (item.id === cartItem.id) && (item.quantity = cartItem.quantity))
            return item;
        })
        console.log(newCartItems);
        setUpdatedCart(newCartItems)
    }, [])

    // const getSubTotal = () => {
    // return 
    // const total = cartData.reduce((acc, item) => (item.quantity * item.price) + acc, 0)
    // }
    // const getTotal = () => total + deliveryCharge;
    // const getTotal = () => getSubTotal() + deliveryCharge;

    const { cartContainer } = useStyles();

    return (
        <Container>
            <Grid container spacing={4} style={{ marginTop: 20 }}>
                <Grid item lg={8}>
                    <div style={{ border: '1px solid #ddd', padding: 15, marginBottom: 15 }}>
                        <Typography variant="h5">My Cart ( {cartItemCount} items )</Typography>
                    </div>
                    <div style={{ border: '1px solid #ddd', borderBottom: 0, }}>
                        {
                            cartData.map(item =>
                                <CartSingle
                                    key={item.id}
                                    changeCart={changeCart}
                                    item={item}
                                />)
                        }
                    </div>
                    <div style={{ margin: '20px 0', textAlign: 'center' }}>


                        <Link to="/checkout">
                            <Button variant="contained">Checkout </Button>
                        </Link>
                    </div>
                </Grid>
                <Grid item lg={4}>
                    <CheckoutSummary />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cart;