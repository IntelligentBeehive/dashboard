import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import pollenLogo from '../../assets/img/PollenIcon.png';

import styles from './pollen-page.styles'
import Grid from '@material-ui/core/Grid';
import PollenTable from '../../components/tables/pollen-table/pollen-table.component';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import PollenAmountCard from '../../components/cards/pollen-amount-card/pollen-amount-card.component';

class PollenPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            pollen: {},
            pollenCount: 0,
            selectedTimeFilter: 'day'
        }
    }

    async componentDidMount () {
        const data = await fetch(`${process.env.REACT_APP_API_URL}/pollen`);
        const response = await data.json();

        this.setState({ loading: false, pollen: response });
    }

    render(){

        const { classes } = this.props;
        const { pollen } = this.state;

        console.log("PollenData", pollen);

        return (
            <React.Fragment>
                {
                    this.state.loading ?
                        <LoadingSpinner />
                        :
                        <Grid container direction="row" justify="center" alignItems="flex-start">

                            <Grid item xs={12} lg={6}>
                                <Grid container direction="row" justify="center" alignItems="center">

                                    <Grid item xs={12}>
                                        <PollenAmountCard
                                            changeTimeFilter={this.changeTimeFilter}
                                            information={"Amount of pollen packages today"}
                                            name={"daily pollen"}
                                            image={pollenLogo}
                                            pollenCount={this.state.pollenCount}
                                            defaultSelect={this.state.selectedTimeFilter}
                                            pollenCountLoading={this.state.pollenCountLoading}
                                        />
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid className={classes.tableContainer} item xs={12} lg={6}>
                                <PollenTable pollenList={pollen.pollenList} />
                            </Grid>

                        </Grid>

                }
            </React.Fragment>
        )
    }
}


PollenPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PollenPage);
