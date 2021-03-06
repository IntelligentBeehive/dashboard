const styles = theme => ({
    root: {
        margin: '0 auto',
        maxHeight: '80vh',
        [theme.breakpoints.down('xl')]: {
            maxWidth: '35vw',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '80vw',
        },
        overflowX: 'auto',

    },
    table: {
        minWidth: 500,
    },

    tableBody: {
        maxHeight: '80vh',
        overflowY: 'scroll'
    }
});

export default styles;
