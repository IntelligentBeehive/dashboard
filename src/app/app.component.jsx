import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from '../components/navigation/navbar/navbar.component';
import Sidebar from '../components/navigation/sidebar/sidebar.component';

import SensorPage from '../pages/sensor-page/sensor-page.component';
import HealthPage from '../pages/health-page/health-page.component';
import AudioPage from '../pages/audio-page/audio-page.component';
import PollenPage from '../pages/pollen-page/pollen-page.component';
import WaggleDancePage from '../pages/waggledance-page/waggledance-page.component';

import { withStyles } from '@material-ui/core';

import styles from './app.styles';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            left: false
        }
    }

    toggleDrawer = () => {
        this.setState({ left: !this.state.left})
    };

    render() {
        const { classes, history } = this.props;

        return (
            <React.Fragment>
                <Navbar username='Username' toggleDrawer={this.toggleDrawer} />
                <Sidebar toggleDrawer={this.toggleDrawer} left={this.state.left} />

                <div className={classes.mainContent}>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/sensor' />
                        </Route>

                        <Route exact path='/sensor' component={SensorPage} />
                        <Route exact path='/health' component={HealthPage} />
                        <Route exact path='/audio' component={AudioPage} />
                        <Route exact path='/pollen' component={PollenPage} />
                        <Route exact path='/waggle' component={WaggleDancePage} />
                    </Switch>
                </div>

            </React.Fragment>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(App));
