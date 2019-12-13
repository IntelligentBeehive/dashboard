import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 200,
    },
    progress: {
        animationDuration: '5000ms',
        color: '#ffc613'
    },
    loadingText: {
        marginTop: theme.spacing(2),
        color: '#ffc613',
        fontSize: 24,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    }
}));

export default useStyles;
