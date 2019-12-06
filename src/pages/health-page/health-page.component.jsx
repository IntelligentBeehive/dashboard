import React from 'react';
import StatsCard from '../../components/cards/stats-card/stats-card.component';

import HeartImage from '../../assets/img/HeathCrossLogo.png';
import HoneyComb from '../../assets/img/HoneyCombLogo.png';
import Grid from '@material-ui/core/Grid';

import useStyles from './health-page.styles';
import HealthChart from '../../components/charts/health-chart/health-chart.component';
import VideoPlayer from '../../components/video-player/video-player.component';

const HealthPage = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.pageContainer} container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={6} xl={3}>
                <StatsCard image={HeartImage} name={'Health'} information={'Amount of healthy bees'} value={'78.2%'} />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
                <StatsCard image={HoneyComb} name={'Amount of bees'} information={'Total amount of bees'} value={'403'} />
            </Grid>

            <Grid item xs={12} xl={6}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={6} >
                        <VideoPlayer />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.healthChartContainer}>
                <HealthChart />
            </Grid>
        </Grid>
    );
};

export default HealthPage;
