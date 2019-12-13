import React from 'react';
import Grid from '@material-ui/core/Grid';
import StatsCard from '../../components/cards/stats-card/stats-card.component';
import HeartImage from '../../assets/img/HeathCrossLogo.png';
import GoogleMaps from '../../components/location-map/location-map.component';

class WaggleDancePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} xl={6}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <StatsCard image={HeartImage} name={'Waggle Dance'} information={'If a waggle dance is happening now'} value={'Yes'} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StatsCard image={HeartImage} name={'Total Waggle Dances'} information={'Total dances done up until now'} value={12} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} xl={6}>
                    <GoogleMaps />
                </Grid>
            </Grid>
        )
    }
}

export default WaggleDancePage;
