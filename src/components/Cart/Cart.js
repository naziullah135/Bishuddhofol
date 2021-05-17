import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../context';
import CartSingle from './CartSingle';
const Cart = () => {
    const { cartItems } = useMyContext();
    // const removeCartItem = (e, id) => {
    //     const cartItems = JSON.parse(localStorage.getItem('cart'));
    //     const newCart = cartItems.filter(item => item.id !== id)
    //     localStorage.setItem('cart', JSON.stringify(newCart));
    //     let removeItem = e.target.parentElement.parentElement;
    //     for (let i = 1; i <= 4; i++) {
    //         if (removeItem.tagName === 'TR') {
    //             removeItem.style.display = 'none';
    //         } else {
    //             removeItem = removeItem.parentElement;
    //         }
    //     }

    // }
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
                                // removeCartItem={removeCartItem} 
                                />)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Cart;