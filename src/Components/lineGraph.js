import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';


function LineGraph() {

  const data = {
    labels: [],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
      }
    ]
  };
  let covid = [];

  const [graphData, setGraphData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
      let data = await response.json();
      setGraphData(data.locations);
    }
    getData();
  }, [])

  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      {Object.values(graphData).map((value, index) => {
        return (
          console.log(value.country),
          console.log(value.latest.confirmed)
        )
      })}
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}

export default LineGraph;