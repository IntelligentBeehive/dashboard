import React from 'react'
import PropTypes from 'prop-types';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

import { withStyles } from '@material-ui/core/styles';

import styles from './health-chart.styles';

const data = [
    { name: 'Jan', health: 70, },
    { name: 'Feb', health: 55, },
    { name: 'Mar', health: 75, },
    { name: 'Apr', health: 72, },
    { name: 'May', health: 68, },
    { name: 'Jun', health: 70, },
    { name: 'Jul', health: 52, },
    { name: 'Aug', health: 55, },
    { name: 'Sep', health: 61, },
    { name: 'Oct', health: 70, },
    { name: 'Nov', health: 64, },
    { name: 'Dec', health: 60, },
];

class HealthChart extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            windowSize: this.getWindowDimensions()
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
        console.log(graphWidth);

        return (
            <LineChart className={classes.chart} width={graphWidth} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="health" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        )
    }
}

HealthChart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HealthChart);
