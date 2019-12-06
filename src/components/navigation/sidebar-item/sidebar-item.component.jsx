import React from 'react';
import { withRouter } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './sidebar-item.styles';

const SidebarItem = ({ icon, name, toggleDrawer, link, history, selectedItem, setSelectedItem }) => {

    const classes = useStyles();

    const openItemPage = () => {
        setSelectedItem(name);
        toggleDrawer();
        history.push(`${link}`);
    };

    return (
        <ListItem
            className={classes.sidebarItem}
            button
            key={name}
            onClick={() => openItemPage()}
            style={{ backgroundColor: `${selectedItem === name ? 'rgb(0,0,0)' : 'transparent'}` }}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText className={classes.sidebarItemText} primary={name} />
        </ListItem>
    )
};

export default withRouter(SidebarItem);
