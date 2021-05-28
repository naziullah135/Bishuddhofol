import React from 'react';
import { Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import { useMyContext } from '../../context';

const CheckoutSummary = () => {
    const { updatedCart } = useMyContext();
    const subTotal = updatedCart.reduce((acc, item) => (item.quantity * item.price) + acc, 0)
    const total = subTotal + 20
    return (

        <div style={{ border: '1px solid #ddd', padding: '20px 30px' }}>
            <Typography variant="h5">Checkout Summary</Typography>
            <Table >
                <TableBody width="100%">
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">Subtotal</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="body1"> {subTotal} Tk.</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">Delivery charge</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="body1"> {20} Tk.</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">Total</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="body1"> {total} Tk.</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default CheckoutSummary;