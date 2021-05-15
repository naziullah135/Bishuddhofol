import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'rgba(0,0,0,.8)',
        height: 80
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    navLogoText: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        margin: '1rem .3rem'
    },
    logoImg: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    navbar: {
        display: 'flex',
        alignItems: 'center',
        height: 80,
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    navbarMain: {
        position: 'fixed',
        width: '100%',
        justifyContent: 'space-between',
        zIndex: 999,
        background: 'rgba(0,0,0,.8)',
    },
    appBar: {
        background: 'rgba(0,0,0,.8)',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            display: 'none',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navItem: {
        borderBottom: '2px solid transparent',
        color: '#a8a8a9',
        transition: '.3s',
        '&:hover': {
            borderColor: '#fff',
            color: '#fff',
        }
    },
    navItemActive: {
        borderColor: '#fff',
        color: '#fff',
    },
    navItemDrawer: {
        display: 'flex',
        alignItems: 'center',
        transition: '.3s linear',
        color: '#202C45',
        borderRight: '4px solid transparent',
        '&:hover': {
            borderColor: '#F2184F',
            color: '#F2184F',
        },
    },
    backToTop: {
        position: 'fixed',
        right: 30,
        bottom: 30,
        background: 'rgba(0,0,0,.8)',
        transition: '.3s linear',
        '&:hover': {
            background: 'rgba(0,0,0,1)'
        }
    }
}));

export default useStyles;