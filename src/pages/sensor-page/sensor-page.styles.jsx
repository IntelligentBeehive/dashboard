import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    pageContainer: {
        display: 'flex',
        marginBottom: 50
    },

    temperatureCardContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }

}));

export default useStyles;
