import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
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
  // This should probably be in a different file but I am just keeping it all here for now.

  // Fetches the data from our electric pSQL table
  const [electricData1, setElectricData1] = useState([])
    // 
    useEffect(() => {
    const data = fetch('http://127.0.0.1:5000/electricFetch')
                     .then(response => response.json())
                     .then(data => setElectricData1(data)).then()

    //console.log(data)
    }, [])

  // Fetches the data from our water pSQL table
  const [waterData, setWaterData] = useState([])
  
  useEffect(() => {
  const data = fetch('http://127.0.0.1:5000/waterFetch')
                    .then(response => response.json())
                    .then(data => setWaterData(data)).then()

  }, [])

  // Fetches the data from our hvac pSQL table
  const [hvacData, setHvacData] = useState([])
  
  useEffect(() => {
  const data = fetch('http://127.0.0.1:5000/hvacFetch')
                    .then(response => response.json())
                    .then(data => setHvacData(data)).then()

  }, [])

  // Fetches the data from our events pSQL table
  const [eventsData, setEventsData] = useState([])
  
  useEffect(() => {
  const data = fetch('http://127.0.0.1:5000/eventsFetch')
                    .then(response => response.json())
                    .then(data => setEventsData(data)).then()


  //console.log(data)
  }, [])

  // console.log(hvacData)
  let new_data = {}
  let costs = []
  let dates = []
  for (const [key, value] of Object.entries(jsonElectricData)) {
    dates.push(value['time'])
    costs.push(parseFloat(value['cost'].slice(1).replace(/\,/g,''), 10))
    let date = new Date(value['time'])
    let new_key = String(date.getMonth())+'/'+String(date.getDate())+'/'+String(date.getFullYear())
    new_data[new_key] = 0;
  }
  for (const [key, value] of Object.entries(jsonElectricData)) {
    let date = new Date(value['time'])
    let new_key = String(date.getMonth())+'/'+String(date.getDate())+'/'+String(date.getFullYear())
    new_data[new_key] += parseFloat(value['cost'].slice(1).replace(/\,/g,''), 10);
  }
  //console.log(new_data)
  let milliseconds = 2302345654324; // epoch date
  let date = new Date(milliseconds);  
  // console.log(String(date.getMonth())+'/'+String(date.getDate())+'/'+String(date.getFullYear()))

  // console.log(dates)
  // console.log(costs)
  const [electricData, setElectricData] = useState({
    labels:Object.keys(new_data),
    datasets:[
      {
        label:"First Dataset",
        data:Object.values(new_data),
        backgroundColor:'blue'
      }
    ]
  })
  return (
    <div>
      <NewNavbar />
      <Line data={electricData}>Hello</Line>
      <Grid container spacing={15}>
        <Grid item xs={5}>
          <h1>Sample chartjs example</h1>
          <h1>Electricity Usage</h1>
          <Line data={electricData}>Hello</Line>
        </Grid>
        <Grid item xs={5}>
          <h1>Sample chartjs example</h1>
          <h1>HVAC Usage</h1>
          <Line data={electricData}>Hello</Line>
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