import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import PcSidebar from '../components/navigation/pc-sidebar/pc-sidebar.component';
import MobileSidebar from '../components/navigation/mobile-sidebar/mobile-sidebar.component';
import Navbar from '../components/navigation/navbar/navbar.component';

import useStyles from './app.styles';
import SensorPage from '../pages/sensor-page/sensor-page.component';
import HealthPage from '../pages/health-page/health-page.component';
import AudioPage from '../pages/audio-page/audio-page.component';
import PollenPage from '../pages/pollen-page/pollen-page.component';
import WaggleDancePage from '../pages/waggledance-page/waggledance-page.component';

export const useWindowSize = () => {
    const isClient = typeof window === 'object';

    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        const handleResize = () => {
            setWindowSize(getSize());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
};


const App = () => {

    const classes = useStyles();

    const [state, setState] = React.useState({ left: false, });

    const toggleDrawer = (side, open) => () => { setState({ ...state, [side]: open }) };

    return (
        <React.Fragment>
            <Navbar username='Username' toggleDrawer={toggleDrawer} />
            {
                useWindowSize().width < 960 ?
                    <MobileSidebar toggleDrawer={toggleDrawer} left={state.left} />
                     :
                    <PcSidebar />
            }

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
};

export default App;
