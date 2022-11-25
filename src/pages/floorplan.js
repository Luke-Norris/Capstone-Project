import { Container, Grid } from "@mui/material";
import React from "react";
import NewNavbar from "../components/NewNavbar";
import Thermostat from "../components/Thermostat";
import ControlledSwitches from "../components/Switch";
import floorplan from "../models/floorplan2.png";
import { Helmet } from "react-helmet";
const FloorPlan = () => {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: 	#212529; }"}</style>
      </Helmet>
      <NewNavbar />
      <Grid container spacing={15}>
        <Grid item>
          <Thermostat />
        </Grid>
        <Grid item sx={{ marginTop: 10 }}>
          <ControlledSwitches />
        </Grid>
      </Grid>
      <h1 align="center">secret text</h1>
      <div className="container">
        <img
          align="center"
          src={floorplan}
          width="1300"
          height="600"
          alt="fireSpot"
        />
      </div>
    </div>
  );
};

export default FloorPlan;
