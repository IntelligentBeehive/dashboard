import React from 'react';
import PropTypes from 'prop-types';

import TemperatureChart from '../../components/charts/sensors/temperature-chart/temperature-chart.component';

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core';
import styles from './sensor-page.styles'
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import HumidityChart from '../../components/charts/sensors/humidity-chart/humidity-chart.component';
import Co2Chart from '../../components/charts/sensors/co2-chart/co2-chart.component';
import No2Chart from '../../components/charts/sensors/no2-chart/no2-chart.component';
import WeightChart from '../../components/charts/sensors/weight-chart/weight-chart.component';



class SensorPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            tempData: {},
            humidityData: {},
            co2Data: {},
            no2Data: {},
            weightData: {}
        }
    }

    async componentDidMount() {
        const url = `${process.env.REACT_APP_API_URL}/sensors/temp`;
        console.log('server url', url);

        const tempData = await fetch(`${process.env.REACT_APP_API_URL}/sensors/temp`);
        const tempResponse = await tempData.json();

        const humidityData = await fetch(`${process.env.REACT_APP_API_URL}/sensors/humidity`);
        const humidityResponse = await humidityData.json();

        const co2Data = await fetch(`${process.env.REACT_APP_API_URL}/sensors/co2`);
        const co2Response = await co2Data.json();

        const no2Data = await fetch(`${process.env.REACT_APP_API_URL}/sensors/no2`);
        const no2Response = await no2Data.json();

        const weightData = await fetch(`${process.env.REACT_APP_API_URL}/sensors/weight`);
        const weightResponse = await weightData.json();

        this.setState({
            ...this.state,
            loading: false,
            tempData: tempResponse,
            humidityData: humidityResponse,
            co2Data: co2Response,
            no2Data: no2Response,
            weightData: weightResponse
        })
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
                                <TemperatureChart data={this.state.tempData}/>
                            </Grid>
                            <Grid className={classes.temperatureCardContainer} item xs={11} sm={11} lg={11}>
                                <HumidityChart data={this.state.humidityData}/>
                            </Grid>
                            <Grid className={classes.temperatureCardContainer} item xs={11} sm={11} lg={11}>
                                <Co2Chart data={this.state.co2Data}/>
                            </Grid>
                            <Grid className={classes.temperatureCardContainer} item xs={11} sm={11} lg={11}>
                                <No2Chart data={this.state.no2Data}/>
                            </Grid>
                            <Grid className={classes.temperatureCardContainer} item xs={11} sm={11} lg={11}>
                                <WeightChart data={this.state.weightData}/>
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
