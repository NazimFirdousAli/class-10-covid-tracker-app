import React, { useEffect, useState } from 'react';
import GlobalData from './globalData.js'
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

    // const [globalData, setGlobalData] = useState({});
    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    //         let data = await response.json();

    //         console.log(data.latest);
    //         setGlobalData(data.latest);
    //     }
    //     getData();
    // }, [])

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
                </Grid>
{/* 
                {Object.keys(globalData).map((keys, index) => {
                    return (
                        <Grid item xs={4}>
                            <Paper className={classes.paper} elevation={3}>
                                <h3 className={classes.heading}>{keys.toUpperCase()}</h3>
                                <h4>{globalData[keys]}</h4>
                            </Paper>
                        </Grid>
                    )
                })}
 */}

            </Grid>
        </div>
    );
}

export default InfoPannel;