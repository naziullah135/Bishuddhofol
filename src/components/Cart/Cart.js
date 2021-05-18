import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Button, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../context';
import CartSingle from './CartSingle';
const Cart = () => {
    const { cartItems } = useMyContext();
    const deliveryCharge = 20;
    const getSubTotal = () => {
        return cartItems.reduce((acc, item) => (item.quantity * item.price) + acc, 0)
    }
    const getTotal = () => getSubTotal() + deliveryCharge;
    return (
        <Container style={{ marginTop: 80 }}>
            <TableContainer>
                <Table>
                    <TableBody>
                        {
                            cartItems.map(item =>
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