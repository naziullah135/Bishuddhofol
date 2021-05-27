import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Add } from '@material-ui/icons';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { useMyContext } from '../../context';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
    addressBtn: {
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    inputField: {
        width: '100%',
        borderRadius: 4,
        border: '1px solid rgba(0, 0, 0, 0.23)',
        padding: '15px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        '&:hover': {
            borderColor: theme.palette.primary.main,
        },
        '&:focus': {
            outlineColor: theme.palette.primary.main
        }
    }
}))

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function AddressModal() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { currentUser, setAddresses } = useMyContext();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = currentUser.email;
        axios.post('http://localhost:5000/addAddress', data)
            .then(res => {
                if (res.data) {
                    setAddresses(pre => [...pre, data])
                    setOpen(false);
                }
            })
    };
    // console.log(errors);


    const { addressBtn, inputField } = useStyles();
    return (
        <div >
            <div onClick={handleClickOpen} className={addressBtn}>
                <Add />
                <Typography variant="h6">Add New Address</Typography>
            </div>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Delivery Info
                </DialogTitle>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent dividers>
                        <Container>
                            <Grid container spacing={2}>
                                <Grid item lg={6} ms={6} sm={12}>
                                    <input defaultValue={currentUser.displayName} className={inputField} type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />

                                </Grid>
                                <Grid item lg={6} ms={6} sm={12}>
                                    <input defaultValue={currentUser.email} className={inputField} type="text" placeholder="Email" {...register("newEmail", { required: true, pattern: /^\S+@\S+$/i })} />

                                </Grid>
                                <Grid item lg={6} ms={6} sm={12}>
                                    <input className={inputField} type="tel" placeholder="Phone number" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} />

                                </Grid>
                                <Grid item lg={6} ms={6} sm={12}>
                                    <input className={inputField} type="tel" placeholder="Alternative number" {...register("phone2", { required: false, minLength: 6, maxLength: 12 })} />

                                </Grid>
                                <Grid item lg={6} ms={6} sm={12}>
                                    <select className={inputField}
                                        {...register("city", { required: true })}>
                                        <option value="Dhaka" selected>Dhaka</option>
                                        {/* <option value="Mrs">Jashore</option> */}
                                    </select>
                                </Grid>
                                <Grid item lg={6} ms={6} sm={12}>
                                    <select className={inputField}
                                        {...register("area", { required: true })}>
                                        <option value="" selected disabled hidden>Select Area</option>
                                        <option value="Gulshan">Gulshan</option>
                                        <option value="Bonani">Bonani</option>
                                        <option value="Motijhil">Motijhil</option>
                                        <option value="Dhanmondi">Dhanmondi</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12}>
                                    <textarea
                                        style={{ resize: 'vertical' }}
                                        className={inputField}
                                        name="address"
                                        {...register("address", { required: true })}
                                        rows="6"
                                        placeholder="Enter address"
                                        required />
                                </Grid>

                            </Grid>
                        </Container>

                    </DialogContent>

                    <DialogActions>
                        <Button type="submit" color="primary" variant="outlined">
                            Save
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
