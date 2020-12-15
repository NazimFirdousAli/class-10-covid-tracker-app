import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Bar } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  // container: {
  //   width: "80%",
  //   marginTop: 30,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignContent: "center",
  //   alignItems: "center",
    
  // },
  "& > *": {
    paddingTop: 20,
    margin: theme.spacing(5),
    width: theme.spacing(30),
    height: theme.spacing(15),
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

function LineGraph(){
  const [graphData, setGraphData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
      let data = await response.json();
      setGraphData(data);
    }
    getData();
  }, [])
  return(
    console.log(graphData.latest.confirmed),
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,250,0.5)",
              "rgba(0,250,0,0.5)",
              "rgba(250,0,0,0.5)",
            ],
            data: [graphData.latest.confirmed, graphData.latest.recovered, graphData.latest.deaths],
          },
        ],
      }}
      options={{
        lagend: { display: false },
        title: { display: true, text: `Current Stats from Global Data` },
      }}
    />
  )

}
export default LineGraph;