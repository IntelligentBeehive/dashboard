import React from 'react';
import PropTypes from 'prop-types';

import HeartImage from '../../assets/img/HeathCrossLogo.png';
import HoneyComb from '../../assets/img/HoneyCombLogo.png';

import StatsCard from '../../components/cards/stats-card/stats-card.component';
import HealthChart from '../../components/charts/health-chart/health-chart.component';
import VideoPlayer from '../../components/video-player/video-player.component';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import styles from './health-page.styles';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import HealthCard from '../../components/cards/health-card/health-card.component';


class HealthPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loading: true,
            graphData: {}
        }
    }

    async componentDidMount() {
        let self = this;
        window.setInterval(async function(){
            const data = await fetch(`${process.env.REACT_APP_API_URL}/health/getBeeData?timeFrom=2018-07-05&timeTo=2021-07-05`);
            const response = await data.json();
    
            self.setState({
                ...self.state,
                data: response.beeInfo[response.beeInfo.length - 1],
                loading: false ,
                graphData: response.beeInfo.slice(Math.max(response.beeInfo.length - 50, 1))
            });
        }, 1000)
    }

    render() {
        const classes = this.props.classes;

        console.log("grap", this.state.graphData)

        return (

            this.state.loading ?
                <LoadingSpinner /> :
                <Grid className={classes.pageContainer} container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} xl={3}>
                        <HealthCard
                            image={HeartImage}
                            name={'Brood pattern health'}
                            information={this.state.data.message}
                            healthy={`${this.state.data.broodPatternHealthyConfidence / 100}%`}
                            unhealthy={`${this.state.data.broodPatternUnhealthyConfidence / 100}%`}
                            hivehealth={this.state.data.hiveHealth}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={3}>
                        <StatsCard image={HoneyComb} name={'Amount of bees'} information={'Total amount of bees'} value={this.state.data.beeCount} />
                    </Grid>

                    <Grid item xs={12} className={classes.healthChartContainer}>
                        <HealthChart data={this.state.graphData} />
                    </Grid>
                </Grid>
        );
    }
}

HealthPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HealthPage);
