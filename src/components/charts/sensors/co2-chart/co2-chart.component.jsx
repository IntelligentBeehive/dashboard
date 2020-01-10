import React from 'react';
import PropTypes from 'prop-types';
import { CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import LoadingSpinner from '../../../loading-spinner/loading-spinner.component';
import AxisLabel from '../../axis-label/axis-label.component';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import styles from './co2-chart.styles';

class Co2Chart extends React.Component {

    constructor(props) {
        super(props);

        const data = [];

        props.data.SensorList.forEach(entry => {
            data.push({
                date: entry.dateCreated,
                co2: entry.value
            })
        });

        const sortedData = data.sort((a, b) => (a.date < b.date) ? -1 : 1);

        this.state = {
            windowSize: this.getWindowDimensions(),
            data: sortedData
        }
    }

    getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    };

    handleResize = () => {
        this.setState({ windowSize: this.getWindowDimensions() });
    };

    setGraphWidth = () => {
        const width = this.state.windowSize.width;
        if(width < 960){
            return Math.floor(width * 0.9);
        } else {
            return Math.floor(width * 0.9 - 210);
        }
    };

    render() {
        window.addEventListener('resize', this.handleResize);

        const { classes } = this.props;
        const graphWidth = this.setGraphWidth();

        return (
            <React.Fragment>
                {
                    this.state.loading ?
                        <LoadingSpinner />
                        :
                        <div className={classes.chartContainer}>
                            <Typography className={classes.chartTitle}>CO2 overview</Typography>

                            <LineChart
                                className={classes.chart}
                                width={graphWidth}
                                height={300}
                                data={this.state.data}
                                margin={{ top: 15, right: 30, left: 20, bottom: 40 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="date">
                                    <Label value="CO2 over time" offset={-25} position="insideBottom" />
                                </XAxis>
                                <YAxis label={<AxisLabel axisType="yAxis" x={25} y={125} width={0} height={0}>CO2 parts per million</AxisLabel>}/>

                                <Tooltip />

                                <Line type="monotone" dataKey="co2" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </div>
                }
            </React.Fragment>
        )
    }
}

Co2Chart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Co2Chart);
