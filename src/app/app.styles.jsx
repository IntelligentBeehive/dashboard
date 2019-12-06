const styles = theme => ({
    mainContent: {
        backgroundColor: 'transparent',
        marginTop: 64,
        [theme.breakpoints.up('md')]: {
            paddingLeft: 230
        },
    }
});

export default styles;
