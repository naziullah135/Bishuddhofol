import { Container, Grid, IconButton } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import EditIcon from '@material-ui/icons/EditOutlined';
import Delete from '@material-ui/icons/DeleteOutline';
import axios from 'axios';
import { useMyContext } from '../../context';

const Address = () => {
    const { currentUser, currentAddress, setCurrentAddress, addresses, setAddresses } = useMyContext();
    const email = currentUser.email
    useEffect(() => {
        axios.get(`http://localhost:5000/address/${email}`)
            .then(res => {
                setAddresses(res.data)
            })
    }, [email, setAddresses])
    const flex = {
        display: 'flex',
        alignItems: 'center'
    }
    console.log(addresses);
    const onSiteChanged = (e) => {
        setCurrentAddress(e.currentTarget.value)
    }
    const deleteHandler = id => {
        axios.delete(`http://localhost:5000/deleteAddress/${id}`)
            .then(res => {
                res.data && setAddresses(addresses.filter(item => item._id !== id))
            })
    }
    return (
        <Container>
            {
                addresses.map(singleAddress =>
                    <Grid container spacing={2} key={singleAddress._id} style={{ borderBottom: '1px solid #ddd', padding: '10px 20px' }}>
                        <Grid item lg={2} style={flex}>
                            <input
                                value={JSON.stringify(singleAddress)}
                                checked={currentAddress === JSON.stringify(singleAddress)}
                                onChange={onSiteChanged}
                                style={{ transform: 'scale(1.3)', marginRight: 10 }}
                                type="radio" name="address"
                                id={singleAddress._id} required />
                            <label htmlFor={singleAddress._id}>
                                {singleAddress.area}
                            </label>
                        </Grid>
                        <Grid item lg={8} >
                            <p>Name: <span>{singleAddress.name}</span></p>
                            <p>Phone: <span>{singleAddress.phone}{singleAddress.phone2 && `, ${singleAddress.phone2}`}</span></p>
                            <p>{singleAddress.address}</p>
                            <p> {singleAddress.city}, {'Bangladesh'}</p>
                        </Grid>
                        <Grid item lg={2} style={flex}>
                            <IconButton>
                                <EditIcon color="primary" />
                            </IconButton>
                            <IconButton onClick={() => deleteHandler(singleAddress._id)}>
                                <Delete color="secondary" />
                            </IconButton>
                        </Grid>
                    </Grid>)
            }

        </Container>
    );
};

export default Address;