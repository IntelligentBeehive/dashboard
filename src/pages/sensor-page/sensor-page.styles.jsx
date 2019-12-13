const styles = () => (theme => ({
    pageContainer: {
        display: 'flex',
        marginBottom: 50
    },

    temperatureCardContainer: {
        marginTop: 50,

        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
}));

export default styles();
