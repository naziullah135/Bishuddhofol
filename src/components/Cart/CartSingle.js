import { TableCell, TableRow, Button, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Delete } from '@material-ui/icons';
import { useMyContext } from '../../context';
const CartSingle = ({ item }) => {
    const { cartItems } = useMyContext();
    const { id, img, name, price, quantity } = item;
    const [count, setCount] = useState(quantity);
    const removeCartItem = () => {
        localStorage.setItem('cart', JSON.stringify(cartItems.filter(item => item.id !== id)))
    }
    return (
        <TableRow>
            <TableCell align="center" width='20%'>
                <img src={img} style={{ height: 100, width: 120, objectFit: 'cover' }} alt="" />
            </TableCell>
            <TableCell align="center" width='15%'>{name}</TableCell>
            <TableCell align="center" width='15%'>{price}</TableCell>
            <TableCell align="center" width='20%'>
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: 5,
                    overflow: 'hidden',
                    width: 140,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Button onClick={() => setCount(count > 5 ? count - 1 : 5)} ><RemoveIcon /></Button>
                    <span style={{ fontSize: 20 }}>{count}</span>
                    <Button onClick={() => setCount(count + 1)}> <AddIcon style={{ color: '#58BC34' }} /></Button>
                </div>
            </TableCell>
            <TableCell align="center" width='15%'>{count * price}</TableCell>
            <TableCell align="center" width='15%'>
                <IconButton onClick={removeCartItem}>
                    <Delete color="secondary" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default CartSingle;