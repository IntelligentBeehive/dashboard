import React from 'react'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import useStyles from './health-chart.styles';

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

const HealthChart = () => {

    const classes = useStyles();

    return (
        <LineChart className={classes.chart} width={1600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="health" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    )
};

export default HealthChart;
