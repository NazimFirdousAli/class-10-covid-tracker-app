import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:50,
        padding: '0px',
        margin: '0px',
  height: '74vh',

    },
}));

export default function CountryData() {
    const classes = useStyles();
    const [countryData, setCountryData] = useState({});
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
        <TableContainer component={Paper} className={classes.root} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Country</TableCell>
                        <TableCell align="right">Confirmed</TableCell>
                        <TableCell align="right">Death</TableCell>
                        <TableCell align="right">Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {Object.values(countryData).map((data, index) => {
                            return (
                                <TableRow >
                                    <TableCell align="left" >{data.country}</TableCell>
                                    <TableCell align="right">{data.latest.confirmed}</TableCell>
                                    <TableCell align="right">{data.latest.deaths}</TableCell>
                                    <TableCell align="right">{data.latest.recovered}</TableCell>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
