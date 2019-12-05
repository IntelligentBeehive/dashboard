import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainContent: {
        marginTop: 64,
        [theme.breakpoints.up('md')]: {
            paddingLeft: 230
        },
    }
}));

export default useStyles;
