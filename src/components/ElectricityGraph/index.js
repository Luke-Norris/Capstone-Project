import React from 'react';
import NewNavbar from '../NewNavbar';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Grid } from "@mui/material";
import jsonElectricData from '../pythonScript/electricdf.json'

ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)

const ElectricityGraph = () => {
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
    labels:dates,
    datasets:[
      {
        label:"First Dataset",
        data:costs,
        backgroundColor:'blue'
      }
    ]
  })
  return (<Line data={data}>Electricy Graph</Line>);
};
  
export default ElectricityGraph;
// last entry of electricdf.json is messed up
// "10447":{
//   "id":10524,
//   "cost":"$655,200.00",
//   "time":1668107220000
// }