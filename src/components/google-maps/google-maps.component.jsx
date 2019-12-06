import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import styles from './google-maps.styles';

class GoogleMaps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Google maps container</h1>
            </div>
        )
    }
}

GoogleMaps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoogleMaps);
