import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useMyContext } from '../../../context';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import AddShoppingCart from '@material-ui/icons/AddShoppingCartOutlined';
import { useStyles } from './ShopStyle';
const useStyle = makeStyles({

    counterSection: {
        border: '1px solid #ddd',
        borderRadius: 30,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px 0'
    }
})
const SingleFruit = ({ foodItem }) => {
    const { counterSection } = useStyle();
    const { addToCartBtn, addedMsg } = useStyles();
    const { id, img, name, price, quantity } = foodItem;
    const [count, setCount] = useState(quantity);
    const { setCartItemCount } = useMyContext();
    const updateCart = () => {
        const cartItems = { id, quantity: count };
        const previousCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        localStorage.setItem('cartItems', JSON.stringify([...previousCart, cartItems]))
        setCartItemCount(pre => pre + 1)
    }
    const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [disabled, setDisabled] = useState(cartData.find(item => item.id === id) && true);

    return (
        <Paper elevation={2} style={{ minHeight: 410 }}>
            <div>
                <img
                    style={{ width: "100%", height: "200px", objectFit: 'cover' }}
                    src={img}
                    alt=""
                />
            </div>
            <div style={{ padding: '5px 15px 15px', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: 30 }}> {name}</h1>
                {disabled ?
                    <h3 className={addedMsg}>ফলটি কার্টে যোগ হয়েছে।</h3> :
                    <>
                        <h2>Tk. {price * count}</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', }}>
                            <p style={{ fontSize: 18 }}>Weight(kg): </p>
                            <span className={counterSection}>
                                <Button onClick={() => setCount(count > 5 ? count - 1 : 5)} ><RemoveIcon /></Button>
                                <span style={{ fontSize: 20 }}>{count}</span>
                                <Button onClick={() => setCount(count + 1)}> <AddIcon style={{ color: '#58BC34' }} /></Button>
                            </span>
                        </div>
                    </>}
                <Button
                    onClick={() => {
                        updateCart();
                        setDisabled(true);
                    }}
                    disabled={disabled}
                    className={addToCartBtn}
                    variant="outlined"
                    style={{ borderColor: disabled ? '#ddd' : '#059033', }}>
                    {disabled || <AddShoppingCart />}
                    {disabled ? '✔ Added' : `Add to cart`}
                </Button>
            </div>
        </Paper>
    );
};

export default SingleFruit;