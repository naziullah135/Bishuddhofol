import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyle = makeStyles({

    counterSection: {
        border: '1px solid #ddd',
        borderRadius: 30,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 20
    }
})
const Counter = ({ price }) => {
    const { counterSection } = useStyle();
    const [count, setCount] = useState(5);
    return (
        <>
            <Typography variant="h4">মূল্য: ৳ {price * count}</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '20px 0' }}>
                <Typography variant="h5">পরিমান(KG): </Typography>
                <span className={counterSection}>
                    <Button onClick={() => setCount(count > 5 ? count - 1 : 5)} ><RemoveIcon /></Button>
                    <span style={{ fontSize: 20 }}>{count}</span>
                    <Button onClick={() => setCount(count + 1)}> <AddIcon style={{ color: '#58BC34' }} /></Button>
                </span>
            </div>
        </>
    );
};

export default Counter;