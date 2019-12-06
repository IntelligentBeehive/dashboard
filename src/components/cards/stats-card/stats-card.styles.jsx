import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '100px',
        backgroundColor: '#ececf6',
        boxShadow: '0px 4px 5px 3px rgba(0,0,0,0.36)',

        [theme.breakpoints.down('xl')]: {
            minWidth: 400,
            maxWidth: 400,
            minHeight: 600,
            maxHeight: 600,
        },
        [theme.breakpoints.down('lg')]: {
            marginRight: 40,
            marginLeft: 40,
            minWidth: '20vw',
            maxWidth: '20vw',
            minHeight: 600,
            maxHeight: 600,
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '70px',
            marginRight: 20,
            marginLeft: 20,
            minWidth: '33vw',
            maxWidth: '33vw',
            minHeight: 600,
            maxHeight: 600,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '70px',
            marginRight: 20,
            marginLeft: 20,
            minWidth: '40vw',
            maxWidth: '40vw',
            minHeight: 600,
            maxHeight: 600,
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto',
            marginTop: '70px',
            minWidth: '80vw',
            maxWidth: '80vw',
            minHeight: 600,
            maxHeight: 600,
        },



    },
    cardTextContainer: {
        display: 'block',
        width: '100%',
    },
    cardContent: {
        display: 'block',
        width: '100%',
    },
    cardImage: {
        marginTop: '30%',
        [theme.breakpoints.down('xs')]:{
            width: 75,
            height: 75
        },
        width: 100,
        height: 100,
        display: 'flex',
        margin: '0 auto'
    },
    cardTitle: {
        display: 'block',
        margin: '0 auto',
        marginTop: 20,
        textAlign: 'center',
        color: '#000000',
        fontSize: 32,
        fontWeight: 600
    },
    cardValue: {
        display: 'block',
        margin: '0 auto',
        marginTop: 20,
        textAlign: 'center',
        color: '#000000',
        fontSize: 32,
        fontWeight: 400
    },
    cardInformation: {
        display: 'block',
        margin: '0 auto',
        marginTop: 50,
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 400,
        fontStyle: 'italic'
    }
}));

export default useStyles;
