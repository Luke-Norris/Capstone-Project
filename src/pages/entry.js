import React from 'react';
import { useEffect } from 'react';
import NewNavbar from '../components/NewNavbar';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Helmet } from "react-helmet";
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Grid, Card, Button, Text } from "@mui/material";
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)

const Entry = () => {
  const [data2, setData2] = useState({data: []});
  const [isLoading2, setIsLoading2] = useState(false);
  const [err2, setErr2] = useState('');

  const handleClick2 = async () => {
    setIsLoading2(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/newWaterTable', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('result is: ', JSON.stringify(result, null, 4));
      setData2(result);
    } catch (err) {
      setErr2(err.message);
    } finally {
      setIsLoading2(false);
    }
  };
  const [waterData, setWaterData] = useState([])
  // This should probably be in a different file but I am just keeping it all here for now.
  const [waterDates, setWaterDates] = useState([])
  const [waterUsage, setWaterUsage] = useState([])
  const [waterCost, setWaterCost] = useState([])
  const [waterTruthy, setWaterTruthy] = useState(false)
  const [waterFit, setWaterFit] = useState([])

  // Fetches the data from our electric pSQL table
  
  useEffect(() => {
    const run = async () => {
      const data1 = await (await fetch('http://127.0.0.1:5000/massiveWater')).json()
      console.log('THIS IS WATER: ',data1)
      setWaterData(data1)
    }
    run();
  }, [])

  useEffect(() => {
    for (var key in waterData) {
      console.log()
      waterDates.push(waterData[key]['week_of_year'])
      waterUsage.push(waterData[key]['sum_of_usage']/1000)
      waterCost.push(waterData[key]['sum_of_real_cost'])
      waterFit.push(waterData[key]['estimated_usage']/1000)
      //console.log('FIT',electricFitData[key]['sum_of_usage'])
    }
    setWaterTruthy(true)

    // console.log('electric weeks:',electricDates)
    // console.log('electric usage:',electricUsage)
    // console.log('electric cost:',electricCost)
  }, [waterData])
  return (
    <div>
    <NewNavbar/> 
      <h1>space</h1>
      <h3>Press to plot data</h3>
      <Button variant="contained" onClick={handleClick2}>
        Refresh Water
      </Button>
      <Card align="center" style={{height:'46vw',width:'98vw', marginTop:'20px',marginLeft:'15px',marginBottom:'20px'}}>
        <Line options={{responsive: true,
            plugins: {
            title: {display: true,
            text: 'Electric Usage',},},}} 
            data={{
      labels:waterDates,
      datasets:[{
          label:"Gallons x 1000",
          data:waterUsage,
          backgroundColor:'blue'},{
            label:"Water Cost (USD)",
            data:waterCost,
            backgroundColor:'red'},{
              label:"Water Fit (Gallons x 1k)",
              data:waterFit,
              backgroundColor:'green'}]
    }}>Hello</Line>
      </Card>
        <Card style={{width:'200px',height:'9vw', marginTop:'-500px',marginLeft:'900px', backgroundColor:'blue'}} align='center'>
          <h1 style={{color:'white'}} align="center">{Math.trunc(waterUsage[waterUsage.length - 1]+waterUsage[waterUsage.length - 2]+waterUsage[waterUsage.length - 3]+waterUsage[waterUsage.length - 4]*1000)}</h1>
          <text style={{color:'white'}} align="center">
            gallons used in the past month. This cost ${Math.trunc(waterCost[waterCost.length - 1]+waterCost[waterCost.length - 2]+waterCost[waterCost.length - 3]+waterCost[waterCost.length - 4])}.
          </text>
        </Card>
    </div>
  );
};
  
export default Entry;

