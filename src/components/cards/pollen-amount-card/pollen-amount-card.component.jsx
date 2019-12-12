import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './pollen-amount-card.styles';

const PollenAmountCard = ({ image, name, value, information }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardContent className={classes.cardContent}>
                <img className={classes.cardImage} src={image} alt={name} />
            </CardContent>
            <CardActions className={classes.cardTextContainer}>
                <Typography className={classes.cardTitle}>{name}</Typography>
                <Typography className={classes.cardValue}>{value}</Typography>
                <Typography className={classes.cardInformation}>{information}</Typography>
            </CardActions>
        </Card>
    );
};

export default PollenAmountCard;
