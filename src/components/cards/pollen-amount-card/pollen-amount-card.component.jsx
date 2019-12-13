import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './pollen-amount-card.styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const PollenAmountCard = ({ image, name, value, changeTimeFilter, defaultSelect }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardContent className={classes.cardContent}>
                <img className={classes.cardImage} src={image} alt={name} />
            </CardContent>
            <CardActions className={classes.cardTextContainer}>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item xs={12} lg={8}>
                        <Typography className={classes.cardTitle}>Amount of pollen filtered by: </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <div className={classes.dropDownContainer}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={(event) => changeTimeFilter(event)}
                                    defaultValue={defaultSelect}
                                >
                                    <MenuItem value={'Day'}>Day</MenuItem>
                                    <MenuItem value={'Week'}>Week</MenuItem>
                                    <MenuItem value={'Month'}>Month</MenuItem>
                                    <MenuItem value={'Quarter'}>Quarter</MenuItem>
                                    <MenuItem value={'Year'}>Year</MenuItem>
                                    <MenuItem value={'Two_Years'}>Two Years</MenuItem>
                                    <MenuItem value={'Five_Years'}>Five Years</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                </Grid>

                <Typography className={classes.cardValue}>{value}</Typography>
                <Typography className={classes.cardInformation}>The amount of pollen over a given timespan</Typography>
            </CardActions>
        </Card>
    );
};

export default PollenAmountCard;
