import React from 'react';
import PropTypes from 'prop-types';
import { CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import LoadingSpinner from '../../../loading-spinner/loading-spinner.component';
import AxisLabel from '../../axis-label/axis-label.component';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import styles from './no2-chart.styles';

class No2Chart extends React.Component {

    constructor(props) {
        super(props);

        const data = [];

        props.data.SensorList.forEach(entry => {
            data.push({
                date: entry.dateCreated,
                no2: entry.value
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
                            <Typography className={classes.chartTitle}>NO2 overview</Typography>

                            <LineChart
                                className={classes.chart}
                                width={graphWidth}
                                height={300}
                                data={this.state.data}
                                margin={{ top: 15, right: 30, left: 20, bottom: 40 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="date">
                                    <Label value="NO2 over time" offset={-25} position="insideBottom" />
                                </XAxis>
                                <YAxis label={<AxisLabel axisType="yAxis" x={25} y={125} width={0} height={0}>NO2 parts per million</AxisLabel>}/>

                                <Tooltip />

                                <Line type="monotone" dataKey="no2" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </div>
                }
            </React.Fragment>
        )
    }
}

No2Chart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(No2Chart);
