import { Container, Grid, Card } from "@mui/material";
import React from "react";
import NewNavbar from "../components/NewNavbar";
import Thermostat from "../components/Thermostat";
import ControlledSwitches from "../components/Switch";
import floorplan from "../models/floorplan2.png";
import { Helmet } from "react-helmet";
import ControlledLightSwitches from "../components/LightSwitches";
const FloorPlan = () => {
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
      <Card style={{height:'25vw', width:'100vw', backgroundColor:'blue'}} >
        <Grid container spacing={10}>
            <Grid item xs={4}>
              <h1 style={{color:'white'}}>Thermostat</h1>
                <Thermostat />
            </Grid>
            <Grid item xs={1}>
              <h1 style={{color:'white'}}>Doors</h1>
              <ControlledSwitches />
            </Grid>
            <Grid item xs={7}>
              <h1 style={{color:'white'}}>Lights</h1>
              <ControlledLightSwitches />
            </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default FloorPlan;
