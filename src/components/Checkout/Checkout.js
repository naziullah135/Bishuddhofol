import { Container, Grid } from '@material-ui/core';
import React from 'react';
import CheckoutSummary from './CheckoutSummary';

const Checkout = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item lg={8}>

                </Grid>
                <Grid item lg={4}>
                    <CheckoutSummary />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Checkout;