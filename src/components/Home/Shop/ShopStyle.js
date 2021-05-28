import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
    addToCartBtn: {
        fontWeight: 700,
        minWidth: 120,
        color: '#059033',
        '&:hover': {
            background: '#059033',
            color: '#fff'
        },
        '@media(max-width:425px)': {
            fontSize: 10,
            padding: 5
        }
    },
    addedMsg: {
        margin: '10px 0 15px 0',
        fontSize: 'calc(2vmin + 10px)'
    }
})