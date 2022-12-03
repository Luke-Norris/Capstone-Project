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


const About = () => {
  const [data2, setData2] = useState({data: []});
  const [isLoading2, setIsLoading2] = useState(false);
  const [err2, setErr2] = useState('');

  const handleClick2 = async () => {
    setIsLoading2(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/newElectricTable', {
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
  // This should probably be in a different file but I am just keeping it all here for now.
  const [electricDates, setElectricDates] = useState([])
  const [electricUsage, setElectricUsage] = useState([])
  const [electricCost, setElectricCost] = useState([])
  const [electricFit, setElectricFit] = useState([])
  const [electricTruthy, setElectricTruthy] = useState(false)

  // Fetches the data from our electric pSQL table
  
  useEffect(() => {
    const run = async () => {
      const data1 = await (await fetch('http://127.0.0.1:5000/massiveElectric')).json()
      console.log('THIS IS ELECTRIC: ',data1)
      setElectricData1(data1)
    }
    run();
  }, [])

  useEffect(() => {
      // for (var i = 0; i < electricData1.length-1; i++) {
      //   //console.log('test', electricData1[i][0], electricData1[i][1])
      //   electricDates.push(electricData1[i][0]);
      //   electricUsage.push(electricData1[i][1]/1000);
      //   electricCost.push(electricData1[i][2]);
      // }
      for (var key in electricData1) {
        console.log()
        electricDates.push(electricData1[key]['week_of_year'])
        electricUsage.push(electricData1[key]['sum_of_usage']/1000)
        electricCost.push(electricData1[key]['sum_of_real_cost'])
        electricFit.push(electricData1[key]['estimated']/1000)
        //console.log('FIT',electricFitData[key]['sum_of_usage'])
      }
      setElectricTruthy(true)

    // console.log('electric weeks:',electricDates)
    // console.log('electric usage:',electricUsage)
    // console.log('electric cost:',electricCost)
  }, [electricData1])

  return (
    <div>
    <NewNavbar/> 
      <h1>space</h1>
      <h3>Press to plot data</h3>
      <Button variant="contained" onClick={handleClick2}>
        Refresh Electric
      </Button>
      <Card align="center" style={{height:'46vw',width:'98vw', marginTop:'20px',marginLeft:'15px',marginBottom:'20px'}}>
        <Line options={{responsive: true,
            plugins: {
            title: {display: true,
            text: 'Electric Usage',},},}} 
            data={{
      labels:electricDates,
      datasets:[{
          label:"Kwatts",
          data:electricUsage,
          backgroundColor:'blue'},{
            label:"Electric Cost (USD)",
            data:electricCost,
            backgroundColor:'red'},{
              label:"Electric Fit (Kwatts)",
              data:electricFit,
              backgroundColor:'green'}]
    }}>Hello</Line>
      </Card>
        <Card style={{width:'200px',height:'9vw', marginTop:'-500px',marginLeft:'900px', backgroundColor:'blue'}} align='center'>
          <h1 style={{color:'white'}} align="center">{Math.trunc(electricUsage[electricUsage.length - 1]+electricUsage[electricUsage.length - 2]+electricUsage[electricUsage.length - 3]+electricUsage[electricUsage.length - 4])}</h1>
          <text style={{color:'white'}} align="center">
            Kwatts used in the past month. This cost ${Math.trunc(electricCost[electricCost.length - 1]+electricCost[electricCost.length - 2]+electricCost[electricCost.length - 3]+electricCost[electricCost.length - 4])}.
          </text>
        </Card>
    </div>
  );
};
  
export default About;