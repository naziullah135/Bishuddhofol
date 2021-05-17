import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useMyContext } from '../../../context';
const useStyle = makeStyles({

    counterSection: {
        border: '1px solid #ddd',
        borderRadius: 30,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
const SingleFruit = ({ foodItem }) => {
    const { counterSection } = useStyle();

    const { id, img, name, price, des, quantity } = foodItem;
    const [count, setCount] = useState(quantity);
    // foodItem.quantity = count;
    const { setCartItemCount, cartItems } = useMyContext();
    const updateCart = () => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const newCart = [...cartData, { ...foodItem, quantity: count }]
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCartItemCount(newCart);
    }
    // const cartItems = JSON.parse(localStorage.getItem('cart'));
    const [isClicked, setIsClicked] = useState(cartItems.find(item => item.id === id));
    return (
        <Paper elevation={2} style={{ minHeight: 500 }}>
            <div>
                <img
                    style={{ width: "100%", height: "220px", objectFit: 'cover' }}
                    src={img}
                    alt=""
                />
            </div>
            <div style={{ padding: 15, textAlign: 'center' }}>
                <h1 style={{ fontSize: 30, margin: 0 }}> {name}</h1>
                <p>{des}</p>
                {isClicked ?
                    <h2>এই ফলটি কার্টে যোগ হয়েছে। কার্ট পেজ এ গিয়ে অর্ডার করুন। ধন্যবাদ।</h2> :
                    <>
                        <h2 style={{ margin: 0 }}>মূল্য: ৳ {price * count}</h2>
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
                        setIsClicked(true);
                    }}
                    disabled={isClicked}
                    variant="contained"
                    style={{ background: isClicked ? '#ddd' : '#58BC34', color: '#fff', fontWeight: 700 }}>
                    {isClicked ? '✔ Already added' : 'Add to cart'}
                </Button>
            </div>
        </Paper>
    );
};

export default SingleFruit;