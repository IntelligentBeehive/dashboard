import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import SettingsRemoteOutlinedIcon from '@material-ui/icons/SettingsRemoteOutlined';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import EmojiNatureOutlinedIcon from '@material-ui/icons/EmojiNatureOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AdbIcon from '@material-ui/icons/Adb';

import SidebarItem from '../sidebar-item/sidebar-item.component';
import Typography from '@material-ui/core/Typography';


import styles from './sidebar.styles';
import { withStyles } from '@material-ui/core/styles';
import { amber, blue, deepPurple, orange, red } from '@material-ui/core/colors';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withRouter } from 'react-router-dom';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

class Sidebar extends React.Component {

    constructor(props){
        super(props);

        const url = window.location.href.split('/');
        const lastSegment = url.pop() || url.pop();

        this.state = {
            selectedItem: lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1),
            windowSize: getWindowDimensions()
        }
    }

    handleResize = () => {
        this.setState({ windowSize: getWindowDimensions() });
    };

    setSelectedItem = name => {
        console.log("change state to: " + name);
        this.setState({ selectedItem: name});
    };

    render() {
        window.addEventListener('resize', this.handleResize);


        const { sidebarContainer, nameContainer, nameText, BeehiveIcon } = this.props.classes;
        const { toggleDrawer, left } = this.props;

        return (
            <SwipeableDrawer
                classes={ {paper: sidebarContainer} }
                variant={ this.state.windowSize.width < 960 ? "temporary" : "permanent" }
                open={left}
                onClose={() => toggleDrawer('left', false)}
                onOpen={() => toggleDrawer('left', true)}
            >

                <div className={nameContainer}>
                    <Typography className={nameText}>
                        <span>
                            <AdbIcon className={BeehiveIcon} style={{ color: amber['A400'] }} />
                        </span>
                        Beehive
                    </Typography>
                </div>

                <Divider />

                <List>
                    <SidebarItem
                        link='/sensor'
                        icon={<SettingsRemoteOutlinedIcon style={{ color: deepPurple[500] }} />}
                        toggleDrawer={() => window.innerWidth < 960 ? toggleDrawer('left', false) : null}
                        selectedItem={this.state.selectedItem}
                        setSelectedItem={this.setSelectedItem}
                        name='Sensor'
                    />
                    <SidebarItem
                        link='/health'
                        icon={<FavoriteBorderOutlinedIcon style={{ color: red[500] }} />}
                        toggleDrawer={() => window.innerWidth < 960 ? toggleDrawer('left', false) : null}
                        selectedItem={this.state.selectedItem}
                        setSelectedItem={this.setSelectedItem}
                        name='Health'

                    />
                    <SidebarItem
                        link='/audio'
                        icon={<GraphicEqOutlinedIcon style={{ color: blue[500] }} />}
                        toggleDrawer={() => window.innerWidth < 960 ? toggleDrawer('left', false) : null}
                        selectedItem={this.state.selectedItem}
                        setSelectedItem={this.setSelectedItem}
                        name='Audio'
                    />
                    <SidebarItem
                        link='/pollen'
                        icon={<FilterVintageOutlinedIcon style={{ color: red[500] }} />}
                        toggleDrawer={() => window.innerWidth < 960 ? toggleDrawer('left', false) : null}
                        selectedItem={this.state.selectedItem}
                        setSelectedItem={this.setSelectedItem}
                        name='Pollen'
                    />
                    <SidebarItem
                        link='/waggle'
                        icon={<EmojiNatureOutlinedIcon style={{ color: orange[500] }} />}
                        toggleDrawer={() => window.innerWidth < 960 ? toggleDrawer('left', false) : null}
                        selectedItem={this.state.selectedItem}
                        setSelectedItem={this.setSelectedItem}
                        name='Waggle Dance'
                    />
                </List>
            </SwipeableDrawer>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Sidebar));
