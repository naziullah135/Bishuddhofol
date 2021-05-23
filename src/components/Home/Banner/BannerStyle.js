import { makeStyles } from "@material-ui/core";
// import bg from '../../../images/banner/moja.mkv'
// import bg from '../../../images/banner.jpg'
const useStyles = makeStyles({
    root: {
        height: '150vh',
        width: '100%',
        // background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
});

export default useStyles;