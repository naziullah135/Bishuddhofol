import { TableCell, TableRow, Button, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Delete } from '@material-ui/icons';
import { useMyContext } from '../../context';
const CartSingle = ({ item }) => {
    const { setCartItemCount } = useMyContext();

    const { id, img, name, price, quantity } = item;
    const [count, setCount] = useState(quantity);
    const removeCartItem = (e, id) => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        const newCart = cartItems.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCartItemCount(newCart)
        let removeItem = e.target.parentElement.parentElement;
        for (let i = 1; i <= 4; i++) {
            if (removeItem.tagName === 'TR') {
                removeItem.style.display = 'none';
            } else {
                removeItem = removeItem.parentElement;
            }
        }

    }
    return (
        <TableRow>
            <TableCell align="center" width='20%'>
                <img src={img} style={{ height: 100, width: 120, objectFit: 'cover' }} alt="" />
            </TableCell>
            <TableCell align="center" width='15%'><h2>{name}</h2></TableCell>
            <TableCell align="center" width='15%'> <h2>৳ {price}</h2></TableCell>
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
            <TableCell align="center" width='15%'><h2>৳ {count * price}</h2></TableCell>
            <TableCell align="center" width='15%'>
                <IconButton onClick={(e) => removeCartItem(e, id)}>
                    <Delete color="secondary" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default CartSingle;