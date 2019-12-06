import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            display: 'grid'
        }
    },

    cardContainer: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 30
        },
        [theme.breakpoints.down('xs')]: {
            display: 'grid'
        }
    },

    healthChartContainer: {
        marginTop: 50,
    },

    videoPlayer: {
        display: 'block',
        marginTop: 200,
        width: '30vw',
        height: 400
    }
}));

export default useStyles;
