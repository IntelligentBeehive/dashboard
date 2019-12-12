const styles = theme => ({
    root: {
        margin: '0 auto',
        [theme.breakpoints.down('xl')]: {
            width: '35vw',
        },
        [theme.breakpoints.down('md')]: {
            width: '90vw',
        },
        overflowX: 'auto',
    },
    table: {
        minWidth: 500,
    },
});

export default styles;
