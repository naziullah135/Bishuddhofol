import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    cartContainer: {
        display: 'flex',
    },
    cartItems: {
        display: 'flex',
        // maxWidth: 800,
        padding: '20px 10px',
        borderBottom: '1px solid #ddd'
    },
    fruitsInfo: {
        display: 'flex',
        justifyContent: 'space-around',
        flex: 3,
        alignItems: 'center',
        '@media(max-width:540px)': {
            flexDirection: 'column-reverse'
        }
    },
    fruitsName: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10
    },
    cartImg: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counter: {
        border: '1px solid #ddd',
        borderRadius: 5,
        overflow: 'hidden',
        width: 140,
        height: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media(max-width:540px)': {
            margin: '10px 0'
        }
    }

})