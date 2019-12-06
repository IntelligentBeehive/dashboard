import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import styles from './video-player.styles';

class VideoPlayer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            windowSize: this.getWindowDimensions()
        }
    }

    getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    };

    handleResize = () => {
        this.setState({ windowSize: this.getWindowDimensions() });
    };

    setVideoPlayerWidth = () => {
        const width = this.state.windowSize.width;
        let videoWidth = Math.floor(width * 0.9);

        if(width > 960){
            videoWidth -= 210;
        }
        if(videoWidth < 725){
            return videoWidth;
        } else {
            return 725
        }
    };

    setVideoPlayerHeight = () => {
        const width = this.state.windowSize.width;
        const height = Math.floor(width / 16 * 9)

        if(height < 450){
            return height
        } else {
            return 450
        }
    };

    render() {
        window.addEventListener('resize', this.handleResize);
        const url = "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4";
        const { classes } = this.props;
        const videoWidth = this.setVideoPlayerWidth();
        const videoHeight = this.setVideoPlayerHeight();

        return (
            <div className={classes.videoPlayerContainer}>
                <video width={videoWidth} height={videoHeight} controls>
                    <source src={url} />
                </video>
            </div>
        )
    }
}

VideoPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoPlayer);
