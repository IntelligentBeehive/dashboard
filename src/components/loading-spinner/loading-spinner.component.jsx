import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './loading-spinner.styles';

const LoadingSpinner = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.container} container direction='column' justify='center' alignItems='center'>
            <Grid className={classes.loaderBox} item>
                <CircularProgress className={classes.progress} size={100} thickness={2.4} />
                <Typography className={classes.loadingText}>Loading...</Typography>
            </Grid>

        </Grid>
    )
};

export default LoadingSpinner;
