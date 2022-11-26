import React from 'react';
import NewNavbar from '../components/NewNavbar';
import ChartJsExample from '../components/ChartJsExample';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Grid } from "@mui/material";
import jsonElectricData from '../pythonScript/electricdf.json'
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)

const Metrics = () => {
  console.log(jsonElectricData['7'])
  let costs = []
  let dates = []
  for (const [key, value] of Object.entries(jsonElectricData)) {
    //console.log(key, value);
    dates.push(value['time'])
    //console.log(parseFloat(value['cost'].slice(1).replace(/\,/g,''), 10))
    costs.push(parseFloat(value['cost'].slice(1).replace(/\,/g,''), 10))
  }
  console.log(dates)
  console.log(costs)
  const [data, setData] = useState({
    // labels:["Jan","Feb","March","April","May","June","July","August","September","Oct","Nov","Dec"],
    labels:dates,
    datasets:[
      {
        label:"First Dataset",
        // data:[10,20,30,42,51,82,31,59,61,73,91,58],
        data:costs,
        backgroundColor:'yellow'
      }
    ]
  })
  return (
    <div>
      <NewNavbar />
      <Grid container spacing={15}>
        <Grid item xs={8}>
          <h1>Sample chartjs example</h1>
          <h1>Sample chartjs example</h1>
          <Line data={data}>Hello</Line>
        </Grid>
      </Grid>
    </div>
  );
};
  
export default Metrics;
// last entry of electricdf.json is messed up
// "10447":{
//   "id":10524,
//   "cost":"$655,200.00",
//   "time":1668107220000
// }