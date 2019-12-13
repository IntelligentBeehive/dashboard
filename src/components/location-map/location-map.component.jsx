import React from 'react';
import PropTypes from 'prop-types';

import MapsImage from '../../assets/img/fakegooglemaps.jpeg';

import { withStyles } from '@material-ui/core';

import styles from './location-map.styles';

class GoogleMaps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            windowSize: this.getWindowDimensions(),
        }
    }

    getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    };

    handleResize = () => {
        this.setState({ windowSize: this.getWindowDimensions() });
    };

    render() {
        window.addEventListener('resize', this.handleResize);

        const { windowSize } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.mapsContainer}>
                <img
                    src={MapsImage}
                    alt='maps'
                />
            </div>
        )
    }
}

GoogleMaps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoogleMaps);
