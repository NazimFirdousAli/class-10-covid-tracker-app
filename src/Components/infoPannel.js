import React, { useEffect, useState } from 'react';
import GlobalData from './globalData.js'
import CountryData from './countryData.js'
import LineGraph from './lineGraph.js'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: 'auto',
        marginTop: 50,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        color: '#64b5f6'
    },
}));

function InfoPannel() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={3}>
                        <h2>Global Data</h2>
                    </Paper>
                    <GlobalData />
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper} elevation={3}>
                        <h2>Country Data</h2>
                    </Paper>
                    <CountryData />
                </Grid>
            </Grid>
            < LineGraph />
        </div>
    );
}

export default InfoPannel;