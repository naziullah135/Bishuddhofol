import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Button, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../context';
import CartSingle from './CartSingle';
const Cart = () => {
    const { cartItems } = useMyContext();
    // const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // const cartItemsId = cartItems.map(item => item.id);
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const cartItemsId = cartItems.map(item => item.id);
        axios.post('http://localhost:5000/fruitsById', cartItemsId)
            .then(res => {
                setCartData(res.data)
            })
    }, [cartItems])
    const deliveryCharge = 20;
    console.log(cartData);
    // update quantity 
    cartData.map(item => {
        cartItems.map(cartItem => (item.id === cartItem.id) && (item.quantity = cartItem.quantity))
        return item;
    })
    console.log(cartData);
    const getSubTotal = () => {
        return cartData.reduce((acc, item) => (item.quantity * item.price) + acc, 0)
    }
    const getTotal = () => getSubTotal() + deliveryCharge;
    return (
        <Container style={{ marginTop: 80 }}>
            <TableContainer>
                <Table>
                    <TableBody>
                        {
                            cartData.map(item =>
                                <CartSingle
                                    key={item.id}
                                    item={item}
                                />)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <section style={{ margin: '100px 0' }}>
                <Typography variant="h4">Cart total</Typography>
                <TableContainer>
                    <Table >
                        <TableBody width="100%">
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5">SUBTOTAL</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h5">৳ {getSubTotal().toFixed(2)}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5">DELIVERY CHARGE</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h5">৳ {deliveryCharge.toFixed(2)}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5">TOTAL</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h5">৳ {getTotal().toFixed(2)}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </Container>
    );
};

export default Cart;