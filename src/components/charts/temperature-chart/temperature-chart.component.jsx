import React from 'react';

import ReactApexChart from 'react-apexcharts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import useStyles from './temperature-chart.styles';

const TemperatureChart = ({temp}) => {

    const classes = useStyles();

    const data = {
        options: {
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70',
                    }
                },
            },
            labels: ['']
        },
        series: [temp],
    };

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <ReactApexChart options={data.options} series={data.series} type="radialBar" height="350" />
            </CardContent>
            <CardActions className={classes.cardTextContainer}>
                <Typography className={classes.cardTitle}>Celcius</Typography>
                <Typography className={classes.cardValue}>{`${temp} °C`}</Typography>
            </CardActions>
        </Card>
    )

};

export default TemperatureChart;
