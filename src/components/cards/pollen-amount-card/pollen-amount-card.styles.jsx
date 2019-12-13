import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '100px',
        backgroundColor: '#ddd7e1',
        boxShadow: '0px 4px 5px 3px rgba(0,0,0,0.36)',
        minHeight: 500,
        maxHeight: 500,

        [theme.breakpoints.down('xl')]: {
            marginRight: 40,
            marginLeft: 80,
            minWidth: '30vw',
            maxWidth: '30vw',
        },
        [theme.breakpoints.down('lg')]: {
            marginRight: 40,
            marginLeft: 40,
            minWidth: '30vw',
            maxWidth: '30vw',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0 auto',
            marginTop: 50,
            minWidth: '50vw',
            maxWidth: '50vw',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
            marginTop: '70px',
            minWidth: '80vw',
            maxWidth: '80vw',
            minHeight: 420,
            maxHeight: 420,
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto',
            marginTop: '70px',
            minWidth: '80vw',
            maxWidth: '80vw',
            minHeight: 420,
            maxHeight: 420,
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
        [theme.breakpoints.down('sm')]:{
            width: 55,
            height: 55
        },
        width: 75,
        height: 75,
        display: 'flex',
        margin: '0 auto'
    },
    cardTitle: {
        display: 'block',
        margin: '0 auto',
        marginTop: 10,
        textAlign: 'center',
        color: '#000000',
        fontSize: 24,
        fontWeight: 600,

        [theme.breakpoints.down('xs')]:{
            marginTop: 0,
            fontSize: 16,
            marginBottom: 20
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: 24,
            marginBottom: 20
        },
        [theme.breakpoints.down('md')]:{
            fontSize: 24,
            marginBottom: 30
        },
    },
    cardValue: {
        display: 'block',
        margin: '0 auto',
        marginTop: 50,
        textAlign: 'center',
        color: '#000000',
        fontSize: 32,
        fontWeight: 400,

        [theme.breakpoints.down('xs')]:{
            fontSize: 24,
            marginTop: 35,
        },
        [theme.breakpoints.down('sm')]:{
            marginTop: 40,
        },
    },
    cardInformation: {
        display: 'block',
        margin: '0 auto',
        marginTop: 50,
        textAlign: 'center',
        color: '#000000',
        fontSize: 16,
        fontWeight: 400,
        fontStyle: 'italic',

        [theme.breakpoints.down('xs')]:{
            fontSize: 14,
            marginTop: 30,
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: 14,
            marginTop: 30,
        },
    },
    dropDownContainer: {
        margin: '0 auto',
        minWidth: 120,
        maxWidth: 120
    },
    formControl: {
        margin: '0 auto',
        minWidth: 120,
        maxWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default useStyles;
