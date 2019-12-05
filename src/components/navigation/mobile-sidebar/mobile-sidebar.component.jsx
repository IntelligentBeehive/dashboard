import React from 'react';

import SidebarItem from '../sidebar-item/sidebar-item.component';

import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import SettingsRemoteOutlinedIcon from '@material-ui/icons/SettingsRemoteOutlined';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import EmojiNatureOutlinedIcon from '@material-ui/icons/EmojiNatureOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';










import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useStyles from './mobile-sidebar.styles';
import { blue, deepPurple, orange, red } from '@material-ui/core/colors';

const MobileSidebar = ({ toggleDrawer, left }) => {

    const { nameContainer, nameText } = useStyles();

    return (
        <SwipeableDrawer open={left} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>

            <div className={nameContainer}>
                <Typography className={nameText}>Beehive</Typography>
            </div>

            <Divider />

            <List>
                <SidebarItem link='/sensor' icon={<SettingsRemoteOutlinedIcon style={{ color: deepPurple[500] }} />} toggleDrawer={() => toggleDrawer('left', false)} name='Sensor Data'/>
                <SidebarItem link='/health' icon={<FavoriteBorderOutlinedIcon style={{ color: red[500] }} />} toggleDrawer={() => toggleDrawer('left', false)} name='Health indicator'/>
                <SidebarItem link='/audio' icon={<GraphicEqOutlinedIcon style={{ color: blue[500] }} />} toggleDrawer={() => toggleDrawer('left', false)} name='Audio Data'/>
                <SidebarItem link='/pollen' icon={<FilterVintageOutlinedIcon style={{ color: red[500] }} />} toggleDrawer={() => toggleDrawer('left', false)} name='Pollen Data'/>
                <SidebarItem link='/waggle' icon={<EmojiNatureOutlinedIcon style={{ color: orange[500] }} />} toggleDrawer={() => toggleDrawer('left', false)} name='Waggle Dance Data'/>
            </List>

        </SwipeableDrawer>
    );
};

export default MobileSidebar;
