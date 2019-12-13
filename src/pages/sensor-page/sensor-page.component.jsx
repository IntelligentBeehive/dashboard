import React from 'react';
import PropTypes from 'prop-types';

import TemperatureChart from '../../components/charts/temperature-chart/temperature-chart.component';

import HumidityIcon from '../../assets/img/WaterDrops.png';
import WeightIcon from '../../assets/img/WeightIcon.png';
import CO2Icon from '../../assets/img/CO2Icon.png';
import NO2Icon from '../../assets/img/No2Logo.png';

import SmallStatsCard from '../../components/cards/small-stat-card/small-stat-card.component';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core';
import styles from './sensor-page.styles'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import HumidityChart from '../../components/charts/humidity-chart/humidity-chart.component';



class SensorPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            tempData: {},
            humidityData: {}
        }
    }

    async componentDidMount() {
        const tempData = await fetch("http://localhost:8090/sensors/temp");
        const tempResponse = await tempData.json();

        const humidityData = await fetch("http://localhost:8090/sensors/humidity");
        const humidityResponse = await humidityData.json();


        this.setState({...this.state, loading: false, tempData: tempResponse, humidityData: humidityResponse })
    }

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                {
                    this.state.loading ?
                        <LoadingSpinner/>
                        :
                        <Grid className={classes.pageContainer} container direction="row" justify="center" alignItems="center">
                            <Grid className={classes.temperatureCardContainer} item xs={11} sm={11} lg={11}>
                                <TemperatureChart tempData={this.state.tempData}/>
                            </Grid>
                            <Grid className={classes.temperatureCardContainer} item xs={11} sm={11} lg={11}>
                                <HumidityChart tempData={this.state.humidityData}/>
                            </Grid>

                            <Grid item xs={12} lg={8}>
                                <Grid container direction="row" justify="center" alignItems="center">
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
                }
            </React.Fragment>
        );
    }
};

SensorPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SensorPage);
