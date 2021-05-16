import { makeStyles } from "@material-ui/core";
import bg from '../../image/farming-tipps-back.jpg'
const useStyles = makeStyles({
    root: {
        height: 'calc(100vh - 80px)',
        width: '100%',
        background: `url(${bg}),
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))`,
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
});

export default useStyles;