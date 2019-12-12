import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
    },
    loaderBox: {
        backgroundColor: 'rgb(27, 36, 48)',
        padding: 100,
        borderRadius: 30
    },
    progress: {
        animationDuration: '3000ms',
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
