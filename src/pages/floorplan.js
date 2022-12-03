import { Container, Grid, Card, Button, Box } from "@mui/material";
import React from "react";
import { useEffect, useState } from 'react';
import NewNavbar from "../components/NewNavbar";
import Thermostat from "../components/Thermostat";
import ControlledSwitches from "../components/Switch";
import floorplan from "../models/floorplan2.png";
import { Helmet } from "react-helmet";
import ControlledLightSwitches from "../components/LightSwitches";



const FloorPlan = () => {

  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/microwave', {
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
      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const [data2, setData2] = useState({data: []});
  const [isLoading2, setIsLoading2] = useState(false);
  const [err2, setErr2] = useState('');

  const handleClick2 = async () => {
    setIsLoading2(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bath', {
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
  
  return (
    <div>
      {/* <h1 style={{color:'white'}}>
        Floorplan
      </h1> */}
      <Helmet>
        <style>{"body { background-color: 	#d5e5f6; }"}</style>
      </Helmet>
      <NewNavbar />
      <div className="container">
      <h1 align="center">Floorplan</h1>
        <img
          align="center"
          src={floorplan}
          width="1300"
          height="600"
          alt="fireSpot"
        />
      </div>
      <Card style={{height:'30vw', width:'100vw', backgroundColor:'blue'}} >
        <Grid container spacing={20}>
            <Grid item xs={4} style={{marginTop:'70px'}}>
              <h1 style={{color:'white', marginLeft:'110px', marginBottom:'-50px'}}>Thermostat</h1>
                <Thermostat />
            </Grid>
            <Grid item xs={1} style={{marginTop:'70px'}}>
              <h1 style={{color:'white'}}>Doors</h1>
              <ControlledSwitches />
            </Grid>
            <Grid item xs={6}>
              <h1 style={{color:'white', marginTop:'70px'}}>Lights</h1>
              <ControlledLightSwitches />
            </Grid>
        </Grid>
      </Card>
      <Card style={{marginLeft:'1100px', marginTop:'-300px', width:'15vw', height:'13vw'}}>
        <h1 align="center">Microwave</h1>
        <Box textAlign='center'>
          <Button variant="contained" onClick={handleClick} align="center">
            Simulate
          </Button>
        </Box>
        <h1 align="center">Bath</h1>
        <Box textAlign='center'>
          <Button variant="contained" onClick={handleClick2}>
            Simulate
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default FloorPlan;
