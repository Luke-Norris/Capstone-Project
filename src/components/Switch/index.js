import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SensorsTwoTone } from "@mui/icons-material";

const ControlledSwitches = () => {
  const [frontDoor, setFrontDoor] = React.useState(true);
  const [backDoor, setBackDoor] = React.useState(true);
  const [garageDoor, setGarageDoor] = React.useState(true);
  const { spawn } = require("child_process");
  const sensor = spawn("python", ["pythonScript/updateEvents.py"]);

  const frontDoorSwitch = (
    <Switch
      checked={frontDoor}
      onChange={(event) => {
        setFrontDoor(event.target.checked);
        // Here we need to run the update function which is in updateEvents.py
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const backDoorSwitch = (
    <Switch
      checked={backDoor}
      onChange={(event) => {
        setBackDoor(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const garageDoorSwitch = (
    <Switch
      checked={garageDoor}
      onChange={(event) => {
        setGarageDoor(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  return (
    <FormGroup>
      <FormControlLabel
        control={frontDoorSwitch}
        label="Front Door"
        style={{ color: "white" }}
      />
      <FormControlLabel
        control={backDoorSwitch}
        label="Back Door"
        style={{ color: "white" }}
      />
      <FormControlLabel
        control={garageDoorSwitch}
        label="Garage Door"
        style={{ color: "white" }}
      />
    </FormGroup>
  );
};

export default ControlledSwitches;
