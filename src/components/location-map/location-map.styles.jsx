const styles = theme => ({

    mapsContainer: {
        [theme.breakpoints.down('xl')]: {
            display: 'flex',
            marginTop: '30',
            minWidth: 'calc(50vw - 210px)',
            maxWidth: 'calc(50vw - 210px)',
            minHeight: 600,
            maxHeight: 600
        },
        [theme.breakpoints.down('lg')]: {
            margin: '0 auto',
            marginTop: 50,
            marginBottom: 30,
            minWidth: 'calc(80vw - 210px)',
            maxWidth: 'calc(80vw - 210px)',
            minHeight: 550,
            maxHeight: 550
        },
        [theme.breakpoints.down('md')]: {
            minWidth: 'calc(80vw - 210px)',
            maxWidth: 'calc(80vw - 210px)',
            minHeight: 550,
            maxHeight: 550

        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '80vw',
            maxWidth: '80vw',
            minHeight: 400,
            maxHeight: 400
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: '80vw',
            maxWidth: '80vw',
            minHeight: 300,
            maxHeight: 300
        }

    }
});

export default styles;
