import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useMyContext } from '../../../context';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
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

    const { id, img, name, price, des, quantity } = foodItem;
    const [count, setCount] = useState(quantity);
    const [previousCart, setPreviousCart] = useState([])
    // foodItem.quantity = count;
    // const { setCartItemCount, cartItems } = useMyContext();
    const updateCart = () => {
        const cartId = localStorage.getItem('cartId');
        if (!cartId) {
            const newCartId = uuid();
            const cartData = {
                cartId: newCartId,
                cartItems: [{ ...foodItem, quantity: count, }]
            }
            axios.post('http://localhost:5000/addToCart', cartData)
                .then(res => {
                    res.data && localStorage.setItem('cartId', newCartId);
                })
        }
        if (cartId) {
            axios.patch(`http://localhost:5000/updateCart/${cartId}`, { ...foodItem, quantity: count })
                .then(res => {
                    console.log(res, 'hello');
                })
        }

        // const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        // const newCart = [...cartData, { ...foodItem, quantity: count }]
        // localStorage.setItem('cart', JSON.stringify(newCart))
        // setCartItemCount(newCart);
    }
    // const cartItems = JSON.parse(localStorage.getItem('cart'));

    const [cartItems, setCartItems] = useState([])
    const [disabled, setDisabled] = useState(null);
    const cartId = localStorage.getItem('cartId');
    useEffect(() => {
        if (cartId) {
            axios.get(`http://localhost:5000/cart/${cartId}`)
                .then(res => {
                    setCartItems(res.data?.[0].cartItems);
                })
        }
    }, [cartId])
    useEffect(() => {
        setDisabled(cartItems.find(item => item.id === id))
    }, [cartItems])
    console.log(cartItems, disabled);
    return (
        <Paper elevation={2} style={{ minHeight: 490 }}>
            <div>
                <img
                    style={{ width: "100%", height: "220px", objectFit: 'cover' }}
                    src={img}
                    alt=""
                />
            </div>
            <div style={{ padding: '5px 15px 15px', textAlign: 'center' }}>
                <h1 style={{ fontSize: 30 }}> {name}</h1>
                <p style={{ margin: '10px 0' }}>{des}</p>
                {disabled ?
                    <h2 style={{ margin: '20px 0 25px 0' }}>এই ফলটি কার্টে যোগ হয়েছে। কার্ট পেজ এ গিয়ে অর্ডার করুন। ধন্যবাদ।</h2> :
                    <>
                        <h2>মূল্য: ৳ {price * count}</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }}>
                            <p style={{ fontSize: 18 }}>পরিমান(KG): </p>
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
                    variant="contained"
                    style={{ background: disabled ? '#ddd' : '#059033', color: '#fff', fontWeight: 700 }}>
                    {disabled ? '✔ Already added' : 'Add to cart'}
                </Button>
            </div>
        </Paper>
    );
};

export default SingleFruit;