import React from 'react';
import { useEffect } from 'react';
import NewNavbar from '../components/NewNavbar';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Helmet } from "react-helmet";
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Grid, Card, Button, Text } from "@mui/material";
const Home = () => {
  const [data2, setData2] = useState({data: []});
  const [isLoading2, setIsLoading2] = useState(false);
  const [err2, setErr2] = useState('');

  const handleClick2 = async () => {
    setIsLoading2(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/newHvacTable', {
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
  const [electricData1, setElectricData1] = useState([])
  const [hvacData, setHvacData] = useState([])
  // This should probably be in a different file but I am just keeping it all here for now.
  const [hvacDates, setHvacDates] = useState([])
  const [hvacUsage, setHvacUsage] = useState([])
  const [hvacCost, setHvacCost] = useState([])
  const [electricDates, setElectricDates] = useState([])
  const [electricUsage, setElectricUsage] = useState([])
  const [electricCost, setElectricCost] = useState([])
  const [electricTruthy, setElectricTruthy] = useState(false)
  const [hvacTruthy, setHvacTruthy] = useState(false)

  // Fetches the data from our electric pSQL table
  console.log('hello')
  useEffect(() => {
    const run = async () => {
      const data1 = await (await fetch('http://127.0.0.1:5000/hvacFetch/1')).json()
      console.log('THIS IS HVAC: ',data1)
      setHvacData(data1)
      console.log(hvacData)
    }
    run();
  }, [])

  useEffect(() => {
    if (hvacData.length > 0) {
      for (var i = 0; i < hvacData.length-1; i++) {
        //console.log('test', electricData1[i][0], electricData1[i][1])
        hvacDates.push(hvacData[i][0]);
        hvacUsage.push(hvacData[i][1]);
        hvacCost.push(hvacData[i][2]);
      }
      setHvacTruthy(true)

    }
    // console.log('electric weeks:',electricDates)
    // console.log('electric usage:',electricUsage)
    // console.log('electric cost:',electricCost)
  }, [hvacData])
  return (
    <div>
    <NewNavbar/> 
      <h1>space</h1>
      <h3>Press to plot data</h3>
      <Button variant="contained" onClick={handleClick2}>
        Refresh HVAC
      </Button>
      <Card align="center" style={{height:'46vw',width:'98vw', marginTop:'20px',marginLeft:'15px',marginBottom:'20px'}}>
        <Line options={{responsive: true,
            plugins: {
            title: {display: true,
            text: 'HVAC Usage',},},}} 
            data={{
      labels:hvacDates,
      datasets:[{
          label:"Temperature (F)",
          data:hvacUsage,
          backgroundColor:'blue'},{
            label:"HVAC Cost (USD)",
            data:hvacCost,
            backgroundColor:'red'}]
    }}>Hello</Line>
      </Card>
    </div>
  );
};
  
export default Home;