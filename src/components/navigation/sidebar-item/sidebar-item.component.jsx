import React from 'react';
import { withRouter } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './sidebar-item.styles';

const SidebarItem = ({ icon, name, toggleDrawer, link, history }) => {

    const classes = useStyles();

    const goToLink = () => {
        toggleDrawer('left', false);
        history.push(`${link}`);
    };

    return (
        <ListItem className={classes.sidebarItem} button key={name} onClick={() => goToLink()}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
};

export default withRouter(SidebarItem);
