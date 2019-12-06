import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    navbar: {
        zIndex: 1100,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        color: 'rgb(255, 255, 255) !important',
        backgroundColor: '#24292e !important',
        minHeight: 64
    },
    toolbar: {
        minHeight: 64
    },
    nameText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'column',
        margin: '0 auto',
        lineHeight: '100%',
        paddingRight: 20,
        marginTop: 6
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            visible: 'none'
        },
    }
}));

export default useStyles;
