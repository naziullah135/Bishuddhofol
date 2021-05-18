import { Container, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../context';
import CartSingle from './CartSingle';
const Cart = () => {
    const { cartItems } = useMyContext();
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
        </Container>
    );
};

export default Cart;