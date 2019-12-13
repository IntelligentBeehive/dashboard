import React from 'react';
import PropTypes from 'prop-types';

import CardLoading from '../card-loading/card-loading,component';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core';

import styles from './pollen-amount-card.styles';

class PollenAmountCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            pollenCount: 0,
            selectedTimeFilter: 'day'
        }
    }

    async componentDidMount() {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pollen/count?time=day`);
        const data = await response.json();

        this.setState({ ...this.state, pollenCount: data, isLoading: false });
    }

    changeTimeFilter = event => {
        this.setState({...this.state, isLoading: true});

        fetch(`${process.env.REACT_APP_API_URL}/pollen/count?time=${event.target.value}`)
            .then(response => response.json())
            .then(data => {
                console.log("pollen count response", data);
                this.setState({ ...this.state, selectedTimeFilter: event.target.value, pollenCount: data, isLoading: false })
            });
    };

    render() {

        const { classes, image, name } = this.props;

        console.log('classes', classes);

        return (
            <Card className={classes.card} >
                {
                    this.state.isLoading ?
                        <CardLoading />
                        :
                        <React.Fragment>
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
                                                    onChange={(event) => this.changeTimeFilter(event)}
                                                    defaultValue={this.state.selectedTimeFilter}
                                                >
                                                    <MenuItem value={'day'}>Day</MenuItem>
                                                    <MenuItem value={'week'}>Week</MenuItem>
                                                    <MenuItem value={'month'}>Month</MenuItem>
                                                    <MenuItem value={'quarter'}>Quarter</MenuItem>
                                                    <MenuItem value={'year'}>Year</MenuItem>
                                                    <MenuItem value={'two_years'}>Two Years</MenuItem>
                                                    <MenuItem value={'five_years'}>Five Years</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                </Grid>

                                <Typography className={classes.cardValue}>{this.state.pollenCount}</Typography>
                                <Typography className={classes.cardInformation}>The amount of pollen over a given timespan</Typography>
                            </CardActions>
                        </React.Fragment>
                }
            </Card>
        )
    }
}

PollenAmountCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PollenAmountCard);
