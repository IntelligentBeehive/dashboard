import React from 'react';
import PropTypes from 'prop-types';

import HealthChart from '../../components/charts/health-chart/health-chart.component';
import CustomizedTables from '../../components/tables/audio-table/audio-table.component';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import styles from './audio-page.styles';

class AudioPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {

        const { classes } = this.props;

        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid className={classes.chartContainer} item xs={12} >
                    <h1 className={classes.tableTitle}>Microphone logs</h1>
                </Grid>
                <Grid className={classes.chartContainer} item xs={12} >
                    <HealthChart />
                </Grid>
                <Grid className={classes.tableContainer} item xs={12} >
                    <CustomizedTables />
                </Grid>
            </Grid>
        );
    }
}

AudioPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AudioPage);
