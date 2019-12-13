import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import styles from './pollen-table.styles';

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


class PollenTable extends React.Component {

    constructor(props){
        super(props);
    }

    getFilteredPollenInformation = pollenList => {
        const filteredList = [];

        pollenList.forEach(pollen => {
            if(filteredList.find(p => p.plantName === pollen.plantName) === undefined){
                filteredList.push({
                    dateCreated: pollen.dateCreated,
                    plantName: pollen.plantName,
                    percentage: this.getPercentageOfTotalPerPlant(pollenList, pollen.plantName),
                    color: pollen.hex
                });
            }
        });

        // sort the list based on highest percentage to lowest
        filteredList.sort((a, b) => (a.percentage > b.percentage) ? -1 : 1);

        return filteredList;
    };

    getPercentageOfTotalPerPlant = (pollenList, plant) => {
        const totalItemsInList = pollenList.length;
        let totalNumberOfPlants = 0;

        pollenList.forEach(pollen => {
            if(pollen.plantName === plant){
                totalNumberOfPlants++
            }
        });

        return parseFloat(`${totalNumberOfPlants / totalItemsInList * 100}`).toFixed(2);
    };


    render() {

        const { classes, pollenList } = this.props;
        const filteredPollenList = this.getFilteredPollenInformation(pollenList);

        console.log("List of pollen", filteredPollenList);

        return (
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Color</StyledTableCell>
                            <StyledTableCell align="left">Flower</StyledTableCell>
                            <StyledTableCell align="left">Percentage</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.tableBody}>
                        {
                            filteredPollenList.map(pollen => (
                                <StyledTableRow key={pollen.dateCreated}>
                                    <StyledTableCell style={{ backgroundColor: pollen.color}} component="th" scope="row"></StyledTableCell>
                                    <StyledTableCell align="left">{pollen.plantName}</StyledTableCell>
                                    <StyledTableCell  align="left" >{`${pollen.percentage}%`}</StyledTableCell>
                                </StyledTableRow>))
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

PollenTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PollenTable);
