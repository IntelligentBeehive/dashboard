import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './navbar.styles';

const Navbar = ({ username, toggleDrawer }) => {
    const { navbar, toolbar, nameText, menuButton } = useStyles();

    return (
        <AppBar className={navbar} position="fixed">
            <Toolbar className={toolbar}>
                <IconButton className={menuButton} color="inherit" aria-label="open drawer" onClick={toggleDrawer('left', true)} edge="start">
                    <MenuIcon />
                </IconButton>
                <Typography className={nameText} variant="h6" >{username}</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
