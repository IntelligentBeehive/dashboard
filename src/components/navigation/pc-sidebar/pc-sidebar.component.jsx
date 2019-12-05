import React from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import SettingsRemoteOutlinedIcon from '@material-ui/icons/SettingsRemoteOutlined';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import EmojiNatureOutlinedIcon from '@material-ui/icons/EmojiNatureOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import SidebarItem from '../sidebar-item/sidebar-item.component';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import useStyles from './pc-sidebar.styles.jsx';
import { blue, deepPurple, orange, purple, red } from '@material-ui/core/colors';

const PcSidebar = () => {
    const { nameContainer, nameText, titleText } = useStyles();

    return (
        <Drawer variant="permanent" anchor="left">

            <div className={nameContainer}>
                <Typography className={nameText}>Beehive</Typography>
            </div>

            <Divider />

            <List>
                <SidebarItem icon={<SettingsRemoteOutlinedIcon style={{ color: deepPurple[500] }} />} toggleDrawer={() => null} name='Sensor Data'/>
                <SidebarItem icon={<FavoriteBorderOutlinedIcon style={{ color: red[500] }} />} toggleDrawer={() => null} name='Health indicator'/>
                <SidebarItem icon={<GraphicEqOutlinedIcon style={{ color: blue[300] }} />} toggleDrawer={() => null} name='Audio Data'/>
                <SidebarItem icon={<FilterVintageOutlinedIcon style={{ color: red[400] }} />} toggleDrawer={() => null} name='Pollen Data'/>
                <SidebarItem icon={<EmojiNatureOutlinedIcon style={{ color: orange[500] }} />} toggleDrawer={() => null} name='Waggle Dance Data'/>
            </List>
        </Drawer>
    );
};

export default PcSidebar;
