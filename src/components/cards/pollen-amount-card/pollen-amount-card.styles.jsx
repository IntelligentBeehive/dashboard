import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '100px',
        backgroundColor: '#ddd7e1',
        boxShadow: '0px 4px 5px 3px rgba(0,0,0,0.36)',
        minHeight: 300,
        maxHeight: 300,

        [theme.breakpoints.down('xl')]: {
            minWidth: 400,
            maxWidth: 400,
        },
        [theme.breakpoints.down('lg')]: {
            marginRight: 40,
            marginLeft: 40,
            minWidth: '20vw',
            maxWidth: '20vw',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0 auto',
            marginTop: 50,
            minWidth: '33vw',
            maxWidth: '33vw',
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '40vw',
            maxWidth: '40vw',
            margin: '0 auto',
            marginTop: 50
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto',
            marginTop: '70px',
            minWidth: '80vw',
            maxWidth: '80vw',
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
        marginTop: '5%',
        [theme.breakpoints.down('xs')]:{
            width: 50,
            height: 50
        },
        width: 75,
        height: 75,
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
