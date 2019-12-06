import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import styles from './audio-table.styles';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


class AudioTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            logs: [
                this.createData('Queen left the hive', '13:00 20/03/2020', 'Queen Gone', 'Link to audio'),
                this.createData('New queen emerged', '14:00 20/03/2020', 'Tooting', 'Link to audio'),
                this.createData('Possible danger in the hive', '15:00 20/03/2020', 'Hissing', 'Link to audio'),
                this.createData('Queen left the hive', '16:00 20/03/2020', 'Queen Gone', 'Link to audio')
            ]
        }
    }

    createData = (info, createdAt, event, sound) => {
        return { info, createdAt, event, sound };
    };

    render() {

        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Info</StyledTableCell>
                            <StyledTableCell align="left">Created at</StyledTableCell>
                            <StyledTableCell align="left">Event</StyledTableCell>
                            <StyledTableCell align="left">Sound</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.logs.map(log => (
                                <StyledTableRow key={log.createdAt}>
                                    <StyledTableCell component="th" scope="row">{log.info}</StyledTableCell>
                                    <StyledTableCell align="left">{log.createdAt}</StyledTableCell>
                                    <StyledTableCell align="left">{log.event}</StyledTableCell>
                                    <StyledTableCell align="left">{log.sound}</StyledTableCell>
                                </StyledTableRow>))
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

AudioTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AudioTable);
