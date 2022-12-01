import React from 'react';
import { useEffect } from 'react';
import NewNavbar from '../components/NewNavbar';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Grid } from "@mui/material";
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)

const Metrics = () => {
  // This should probably be in a different file but I am just keeping it all here for now.
  const [electricDates, setElectricDates] = useState([])
  const [electricUsage, setElectricUsage] = useState([])
  const [electricCost, setElectricCost] = useState([])
  // Fetches the data from our electric pSQL table
  const [electricData1, setElectricData1] = useState([])
  useEffect(() => {
    const run = async () => {
      const data = await (await fetch('http://127.0.0.1:5000/electricFetch')).json()
      setElectricData1(data)
    }
    run();
  }, [])

  useEffect(() => {
    if (electricDates.length == 0) {
      for (var i = 0; i < electricData1.length-1; i++) {
        //console.log('test', electricData1[i][0], electricData1[i][1])
        electricDates.push(electricData1[i][0]);
        electricUsage.push(electricData1[i][1]);
        electricCost.push(electricData1[i][2]);
      }

    }
    console.log('electric weeks:',electricDates)
    console.log('electric usage:',electricUsage)
    console.log('electric cost:',electricCost)
    }, [electricData1])

  // Fetches the data from our water pSQL table
  const [waterData, setWaterData] = useState([])
  useEffect(() => {
    const run = async () => {
      const data = await (await fetch('http://127.0.0.1:5000/waterFetch')).json()
      console.log('water',data)
      setWaterData(data)
      //console.log(data);
    }
    run();
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
    const run = async () => {
      const data = await (await fetch('http://127.0.0.1:5000/eventsFetch')).json()
      setEventsData(data)
      //console.log(data);
    }
    run();
  }, [])

  const [electricData, setElectricData] = useState({
    labels:electricDates,
    // Object.keys(new_data) or ['June','July','Aug','Sep','Oct','Nov']
    datasets:[
      {
        label:"First Dataset",
        data:electricUsage,
        backgroundColor:'blue'
      }
    ]
  })
  return (
    <div>
      <NewNavbar />
      <Line data={{
    labels:electricDates,
    // Object.keys(new_data) or ['June','July','Aug','Sep','Oct','Nov']
    datasets:[
      {
        label:"First Dataset",
        data:electricUsage,
        backgroundColor:'blue'
      }
    ]
  }}>Hello</Line>
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