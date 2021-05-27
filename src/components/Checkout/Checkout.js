import { Container, FormControlLabel, Grid, Button, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react';
import { useStyles } from './CheckoutStyle';
import CheckoutSummary from './CheckoutSummary';
import cod from '../../images/icons/cash-on-delivery.png'
import Address from './Address';
import AddressModal from './AddressModal';

const Checkout = () => {
    const { checkoutCard, addAddress } = useStyles();

    return (
        <Container >
            <Grid container spacing={3} style={{ marginTop: 20 }}>
                <Grid item lg={8}>
                    <div className={checkoutCard}>
                        <div style={{ padding: 15, borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h5">Delivery Address </Typography> <span> (Select a address for delivery)</span>
                        </div>
                        <Address />
                        <div className={addAddress}>
                            {/* <Add /> */}
                            <AddressModal />
                            {/* <Typography variant="h6">Add New Address</Typography> */}
                        </div>
                    </div>
                    <div style={{ border: '1px solid #ddd' }}>
                        <div style={{ padding: 15, borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h5">Payment Method</Typography><span> (Select a payment method)</span>
                        </div>
                        <div style={{ display: 'flex', padding: 10 }}>
                            <div style={{ padding: 20, border: '1px solid #ddd', margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}>
                                <input color="default" style={{ fontSize: 30 }} type="radio" id="cod" name="payment-method" value="0" required="" />
                                <label htmlFor="cod" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                    <img src={cod} width="40px" alt="cod" />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                            <div style={{ padding: 20, border: '1px solid #ddd', margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}>
                                <input style={{ fontSize: 30 }} type="radio" id="ssl" name="payment-method" value="0" required="" />
                                <label htmlFor="ssl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                    <img src={cod} width="40px" alt="cod" />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', padding: 20 }}>
                            <input type="checkbox" style={{ margin: '5px 10px 0 0' }} />
                            <p>
                                কোভিড পরিস্থিতির কারণে দেশজুড়ে লকডাউন। সে কারণে আমাদের নিয়মিত প্রোডাক্ট ডেলিভারি বিলম্বিত হতে পারে। বেশিরভাগ এলাকা থেকে লকডাউনের কারণে প্রোডাক্ট সংগ্রহ করা কষ্টসাধ্য হবে। এই পরিস্থিতি আমি মানতে রাজি।
                            </p>
                        </div>
                        <div style={{ textAlign: 'center', margin: '20px 0' }}>

                            <Button variant="contained">Place Order</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={4}>
                    <CheckoutSummary />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Checkout;