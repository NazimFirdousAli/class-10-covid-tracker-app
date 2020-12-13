import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});




export default function CountryData() {

    const [countryData, setCountryData] = useState({});
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
            let data = await response.json();
            console.log(data);
            setCountryData(data.locations);
            // console.log(countryData.length);
        }
        getData();

    }, [])


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left">Country</TableCell>
                        <TableCell align="right">Confirmed</TableCell>
                        <TableCell align="right">Death</TableCell>
                        <TableCell align="right">Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <React.Fragment>

                        {Object.values(countryData).map((data, index) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="left" >{data.country}</TableCell>
                                    <TableCell align="right">{data.latest.confirmed}</TableCell>
                                    <TableCell align="right">{data.latest.deaths}</TableCell>
                                    <TableCell align="right">{data.latest.recovered}</TableCell>
                                </TableRow>
                            )

                        })}



                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={open} timeout="auto" unmou
                                    ntOnExit>
                                    <Box margin={1}>
                                        <Typography variant="h6" gutterBottom component="div">
                                            History
               </Typography>
                                        <Table size="small" aria-label="purchases">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Date</TableCell>
                                                    <TableCell>Customer</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                    <TableCell align="right">Total price ($)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {/* {row.history.map((historyRow) => (
                                         <TableRow key={historyRow.date}>
                                             <TableCell component="th" scope="row">
                                                 {historyRow.date}
                                             </TableCell>
                                             <TableCell>{historyRow.customerId}</TableCell>
                                             <TableCell align="right">{historyRow.amount}</TableCell>
                                             <TableCell align="right">
                                                 {Math.round(historyRow.amount * row.price * 100) / 100}
                                             </TableCell>
                                         </TableRow>
                                     ))} */}
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </React.Fragment>

                    {/* {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
