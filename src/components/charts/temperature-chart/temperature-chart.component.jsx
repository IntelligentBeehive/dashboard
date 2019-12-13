import React from 'react';
import PropTypes from 'prop-types';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import LoadingSpinner from '../../loading-spinner/loading-spinner.component';

import { withStyles } from '@material-ui/core';

import styles from './temperature-chart.styles';
import Typography from '@material-ui/core/Typography';

class TemperatureChart extends React.Component {

    constructor(props){
        super(props);

        const data = [];

        props.tempData.SensorList.forEach(temp => {
            data.push({
                date: temp.dateCreated,
                temperature: temp.value
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
                            <Typography className={classes.chartTitle}>Temperature overview</Typography>
                            <LineChart className={classes.chart} width={graphWidth} height={300} data={this.state.data}
                                       margin={{ top: 15, right: 30, left: 20, bottom: 25 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </div>
                }
            </React.Fragment>
        )
    }
}

TemperatureChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemperatureChart);
