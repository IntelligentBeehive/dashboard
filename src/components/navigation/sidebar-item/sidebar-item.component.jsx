import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './sidebar-item.styles';

const SidebarItem = ({ icon, name, toggleDrawer }) => {

    const classes = useStyles();

    return (
        <ListItem className={classes.sidebarItem} button key={name} onClick={toggleDrawer('left', false)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
};

export default SidebarItem;
