import React from 'react';
import TemperatureChart from '../../components/charts/temperature-chart/temperature-chart.component';

import HumidityIcon from '../../assets/img/WaterDrops.png';
import WeightIcon from '../../assets/img/WeightIcon.png';
import CO2Icon from '../../assets/img/CO2Icon.png';
import NO2Icon from '../../assets/img/No2Logo.png';

import StatsCard from '../../components/cards/stats-card/stats-card.component';
import SmallStatsCard from '../../components/cards/small-stat-card/small-stat-card.component';
import Grid from '@material-ui/core/Grid';

import useStyles from './sensor-page.styles';

const SensorPage = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.pageContainer} container direction="row" justify="center" alignItems="center">
            <Grid className={classes.temperatureCardContainer} item xs={12} sm={12} lg={4}>
                <TemperatureChart temp={32.2}/>
            </Grid>

            <Grid item xs={12} lg={8}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <SmallStatsCard image={HumidityIcon} name={'Humidity'} value={'3.0%'} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SmallStatsCard image={WeightIcon} name={'Weight'} value={'30kg'} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SmallStatsCard image={CO2Icon} name={'CO2'} value={'3.222K'} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SmallStatsCard image={NO2Icon} name={'NO2'} value={'3.181K%'} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SensorPage;
