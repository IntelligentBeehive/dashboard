import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './health-card.styles';

const HealthCard = ({ image, name, healthy, unhealthy, hivehealth, information, secondMessage }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardContent className={classes.cardContent}>
                <img className={classes.cardImage} src={image} alt={name} />
            </CardContent>
            <CardActions className={classes.cardTextContainer}>
                <Typography className={classes.cardTitle}>{name}</Typography>
                <Typography className={classes.cardValue}>Healthy: {healthy}</Typography>
                <Typography className={classes.cardValue}>Unhealthy: {unhealthy}</Typography>
                <Typography className={classes.cardValue}>Hive Health: {hivehealth}</Typography>
                <Typography className={classes.cardInformation}>{information}</Typography>
                {
                    secondMessage ? <Typography className={classes.secondMessage}>{secondMessage}</Typography> : null
                }
            </CardActions>
        </Card>
    );
};

export default HealthCard;
