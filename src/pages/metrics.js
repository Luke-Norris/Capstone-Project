import React from 'react';
import NewNavbar from '../components/NewNavbar';
import ChartJsExample from '../components/ChartJsExample';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Grid } from "@mui/material";
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)

const Metrics = () => {
  const [data, setData] = useState({
    labels:["Jan","Feb","March","April","May","June","July","August","September","Oct","Nov","Dec"],
    datasets:[
      {
        label:"First Dataset",
        data:[10,20,30,42,51,82,31,59,61,73,91,58],
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