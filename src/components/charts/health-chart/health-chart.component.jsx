import React from 'react'
import PropTypes from 'prop-types';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, Label,
} from 'recharts';

import { withStyles } from '@material-ui/core/styles';

import styles from './health-chart.styles';
import Typography from '@material-ui/core/Typography';

class HealthChart extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            windowSize: this.getWindowDimensions(),
            data: this.getGraphData(this.props.data)
        }
    }

    getGraphData = data => {
        const arr = [];
        data.forEach(entry => arr.push({
            hiveHealth: entry.hiveHealth
        }));
        return arr;
    };

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
        console.log(this.state.data);

        return (
            <div className={classes.chartContainer}>
                <Typography className={classes.chartTitle}>Hive Health over time</Typography>

                <LineChart
                    className={classes.chart}
                    width={graphWidth}
                    height={300}
                    data={this.state.data}
                    margin={{ top: 15, right: 30, left: 20, bottom: 40 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="data">
                        <Label value="Beehive health over time" offset={-25} position="insideBottom" />
                    </XAxis>

                    <Tooltip />

                    <Line type="monotone" dataKey="hiveHealth" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        )
    }
}

HealthChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HealthChart);
