import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './card-loading,styles';

const CardLoading = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.container} container direction='column' justify='center' alignItems='center'>
            <CircularProgress className={classes.progress} size={100} thickness={2.4} />
            <Typography className={classes.loadingText}>Loading...</Typography>
        </Grid>
    )
}

export default CardLoading;
