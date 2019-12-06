import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

    sidebarItem: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 25,
        width: 210,

        '&:hover': {
            background: "rgb(20,26,35) !important",
        }
    },

    sidebarItemText: {
        color: '#dce2e4'
    }

});

export default useStyles;
