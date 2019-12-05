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

const MobileSidebar = ({ toggleDrawer, left }) => {

    const { nameContainer, nameText, titleText } = useStyles();

    return (
        <SwipeableDrawer open={left} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>

            <div className={nameContainer}>
                <Typography className={nameText}>Beehive</Typography>
            </div>

            <Divider />

            <List>
                <SidebarItem icon={<SettingsRemoteOutlinedIcon />} toggleDrawer={() => toggleDrawer('left', false)} name='Sensor Data'/>
                <SidebarItem icon={<FavoriteBorderOutlinedIcon />} toggleDrawer={() => toggleDrawer('left', false)} name='Health indicator'/>
                <SidebarItem icon={<GraphicEqOutlinedIcon />} toggleDrawer={() => toggleDrawer('left', false)} name='Audio Data'/>
                <SidebarItem icon={<FilterVintageOutlinedIcon />} toggleDrawer={() => toggleDrawer('left', false)} name='Pollen Data'/>
                <SidebarItem icon={<EmojiNatureOutlinedIcon />} toggleDrawer={() => toggleDrawer('left', false)} name='Waggle Dance Data'/>
            </List>

        </SwipeableDrawer>
    );
};

export default MobileSidebar;
