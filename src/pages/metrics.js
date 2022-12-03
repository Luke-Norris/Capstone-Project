import React from 'react';
import { useEffect } from 'react';
import NewNavbar from '../components/NewNavbar';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Helmet } from "react-helmet";
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { Grid, Card, Button } from "@mui/material";
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement
)

const Metrics = () => {
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const [electricData1, setElectricData1] = useState([])
  const [waterData, setWaterData] = useState([])
  const [hvacData, setHvacData] = useState([])
  const [eventsData, setEventsData] = useState([])
  // This should probably be in a different file but I am just keeping it all here for now.
  const [electricDates, setElectricDates] = useState([])
  const [electricUsage, setElectricUsage] = useState([])
  const [electricCost, setElectricCost] = useState([])

  const [hvacDates, setHvacDates] = useState([])
  const [hvacUsage, setHvacUsage] = useState([])
  const [hvacCost, setHvacCost] = useState([])
  // Fetches the data from our electric pSQL table
  const [electricTruthy, setElectricTruthy] = useState(false)
  const [waterTruthy, setWaterTruthy] = useState(false)
  const [hvacTruthy, setHvacTruthy] = useState(false)
  const [waterDates, setWaterDates] = useState([])
  const [waterUsage, setWaterUsage] = useState([])
  const [waterCost, setWaterCost] = useState([])
  useEffect(() => {
    const run = async () => {
      const data1 = await (await fetch('http://127.0.0.1:5000/electricFetch/4')).json()
      console.log('THIS IS ELECTRIC: ',data1)
      setElectricData1(data1)
    }
    delay(1000);
    run();
  }, [])

  useEffect(() => {
    if (electricData1.length > 0) {
      for (var i = 0; i < electricData1.length-1; i++) {
        //console.log('test', electricData1[i][0], electricData1[i][1])
        electricDates.push(electricData1[i][0]);
        electricUsage.push(electricData1[i][1]);
        electricCost.push(electricData1[i][2]);
      }
      setElectricTruthy(true)

    }
    // console.log('electric weeks:',electricDates)
    // console.log('electric usage:',electricUsage)
    // console.log('electric cost:',electricCost)
  }, [electricData1])
  ////////////////////////////////////////////////////////////////////////////////
  // Fetches the data from our water pSQL table
  useEffect(() => {
    const run = async () => {
      const data2 = await (await fetch('http://127.0.0.1:5000/waterFetch/2')).json()
      console.log('THIS IS WATER: ',data2)
      setWaterData(data2)
      //console.log(data);
    }
    run();
  }, [])

  useEffect(() => {
    if (waterData.length > 0) {
      for (var i = 0; i < waterData.length-1; i++) {
        //console.log('test', electricData1[i][0], electricData1[i][1])
        waterDates.push(waterData[i][0]);
        waterUsage.push(waterData[i][1]);
        waterCost.push(waterData[i][2]);
      }
      setWaterTruthy(true)
    }
    // console.log('water weeks:',waterDates)
    // console.log('water usage:',waterUsage)
    // console.log('water cost:',waterCost)
    }, [waterData])
  /////////////////////////////////////////////////////////////////////////////////
  // Fetches the data from our hvac pSQL table
  useEffect(() => {
    const run = async () => {
      const data4 = await (await fetch('http://127.0.0.1:5000/hvacFetch/1')).json()
      console.log('THIS IS HVAC: ',data4)
      setHvacData(data4)
      //console.log(data);
    }
    run();
  }, [])

  // end
  // useEffect(() => {
  //   const run = async () => {
  //     const data3 = await (await fetch('http://127.0.0.1:5000/hvacFetch/1')).json()
  //     console.log('THIS IS HVAC: ',data3)
  //     await delay(1000);
  //     setHvacData(data3)
  //     //console.log(data);
  //   }
  //   delay(1000);
  //   run();
  // }, [])

  useEffect(() => {
    if (hvacData.length > 0) {
      for (var i = 0; i < waterData.length-1; i++) {
        //console.log('test', electricData1[i][0], electricData1[i][1])
        hvacDates.push(hvacData[i][0]);
        hvacUsage.push(hvacData[i][1]);
        hvacCost.push(hvacData[i][2]);
      }
      setHvacTruthy(true)

    }
    // console.log('hvac weeks:',hvacDates)
    // console.log('hvac usage:',hvacUsage)
    // console.log('hvac cost:',hvacCost)
    }, [hvacData])

    
  

 
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: 	#d5e5f6; }"}</style>
      </Helmet>
      <NewNavbar />
      <h1>spacer</h1>
      <Button>Refresh</Button>
      {/* row 1 */}
      <Grid container spacing={10}>
        <Grid item xs={5}>
          <Card style={{height:'20vw', marginTop:'20px',marginLeft:'20px',marginBottom:'20px'}}>
            <Line options={{responsive: true,
                plugins: {
                title: {display: true,
                text: 'Electric Usage',},},}} 
                data={{
          labels:electricDates,
          datasets:[{
              label:"Watts",
              data:electricUsage,
              backgroundColor:'blue'}]
        }}>Hello</Line>
          </Card>
        </Grid>
        <Grid item xs={1}>
            <Card style={{width:'200px',height:'15vw', marginTop:'50px', backgroundColor:'blue'}}>
              <h1 style={{color:'white'}} align="center">{Math.trunc(electricUsage[electricUsage.length - 1]+electricUsage[electricUsage.length - 2]+electricUsage[electricUsage.length - 3]+electricUsage[electricUsage.length - 4])}</h1>
              <text style={{color:'white'}} align="center">
                watts used in the past month. This costed ${Math.trunc(electricCost[electricCost.length - 1]+electricCost[electricCost.length - 2]+electricCost[electricCost.length - 3]+electricCost[electricCost.length - 4])}.
              </text>
            </Card>
        </Grid>
        <Grid item xs={5}>
          <Card style={{height:'20vw',width:'550px', marginTop:'20px',marginBottom:'25px',marginRight:'200px',marginLeft:'150px'}}>
            <Line options={{responsive: true,
                plugins: {
                title: {display: true,
                text: 'Electric Cost',},},}} 
                data={{
          labels:electricDates,
          datasets:[{
                label:"Electric Cost (USD)",
                data:electricCost,
                backgroundColor:'red'}]
        }}>Hello</Line>
          </Card>
        </Grid>
      </Grid>
      <Card style={{height:'25vw', width:'100vw', backgroundColor:'blue'}} >
      {/* row 2 */}
        <Grid container spacing={10}>
          <Grid item xs={5}>
            <Card style={{height:'20vw', marginTop:'20px',marginLeft:'20px',marginBottom:'20px'}}>
              <Line options={{responsive: true,
                plugins: {
                title: {display: true,
                text: 'Water Usage',},},}} 
                data={{
                labels:waterDates,
                datasets:[{
                    label:"Gallons",
                    data:waterUsage,
                    backgroundColor:'blue'}]
              }}>Hello</Line>
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Card style={{width:'200px',height:'15vw', marginTop:'50px'}}>
              <h1 style={{color:'blue'}} align="center">{Math.trunc(waterUsage[waterUsage.length - 1]+waterUsage[waterUsage.length - 2]+waterUsage[waterUsage.length - 3]+waterUsage[waterUsage.length - 4])}</h1>
                <text style={{color:'blue' ,marginLeft:'15px'}} align="center">
                  Gallons used in the past month. This costed ${Math.trunc(waterCost[waterCost.length - 1]+waterCost[waterCost.length - 2]+waterCost[waterCost.length - 3]+waterCost[waterCost.length - 4])}.
                </text>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card style={{height:'20vw',width:'550px', marginTop:'20px',marginBottom:'25px',marginRight:'200px',marginLeft:'150px'}}>
            <Line options={{responsive: true,
                plugins: {
                title: {display: true,
                text: 'Water Cost',},},}}
                data={{
              labels:waterDates,
              datasets:[{
                    label:"USD",
                    data:waterCost,
                    backgroundColor:'red'}]
            }}>Hello</Line>
            </Card>
          </Grid>
        </Grid>
      </Card>
      {/* row 3 */}
      <Grid container spacing={10}>
        <Grid item xs={5}>
          <Card style={{height:'20vw', marginTop:'20px',marginLeft:'20px',marginBottom:'20px'}}>
            <Line options={{responsive: true,
                  plugins: {
                  title: {display: true,
                  text: 'HVAC Temperature',},},}}
                  data={{
              labels:hvacDates,
              datasets:[{
                  label:"Farenheit",
                  data:hvacUsage,
                  backgroundColor:'blue'}
                ]
            }}>Hello</Line>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card style={{width:'200px',height:'15vw', marginTop:'50px', backgroundColor:'blue'}}>
          <h1 style={{color:'white'}} align="center">${Math.trunc(hvacCost[hvacCost.length - 1]+hvacCost[hvacCost.length - 2]+hvacCost[hvacCost.length - 3]+hvacCost[hvacCost.length - 4])}</h1>
              <text style={{color:'white'}} align="center">
                spent on A/C within the past month.
              </text>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card style={{height:'20vw',width:'550px', marginTop:'20px',marginBottom:'25px',marginRight:'200px',marginLeft:'150px'}}>
            <Line options={{responsive: true,
                  plugins: {
                  title: {display: true,
                  text: 'HVAC Cost',},},}}
                  data={{
              labels:hvacDates,
              datasets:[
                  {
                    label:"USD",
                    data:hvacCost,
                    backgroundColor:'red'}
                ]
            }}>Hello</Line>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
  
export default Metrics;