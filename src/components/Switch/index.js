import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ControlledSwitches = () => {
  const [frontDoor, setFrontDoor] = React.useState(true);
  const [backDoor, setBackDoor] = React.useState(true);
  const [garageDoor, setGarageDoor] = React.useState(true);
  // const spawn = require("child_process").spawn;

  const frontDoorSwitch = (
    <Switch
      checked={frontDoor}
      onChange={(event) => {
        setFrontDoor(event.target.checked);
        // Here we need to run the update function which is in updateEvents.py
        // const sensor = spawn("python", [
        //   "pythonScript/updateEvents.py",
        //   "door_back",
        // ]);

        // sensor.stdout.on("data", (data) => {
        //   let info = data.toString("utf8");
        //   console.log(info);
        // });

        const h = `
         print('Hello from py')
        `;

        const python_code = `
          import psycopg2
          from datetime import datetime
          import sys

          # event for the doors are: door_back, door_front, door_garage
          def update(event):
              conn = psycopg2.connect(host="138.26.48.83", database="Team5DB", user="Team5", password="team5")
              cur = conn.cursor()
              cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (datetime.now(), sys.argv[0], False))
              # is the sys.argv[0] the event that I passed from the switch??
              conn.commit()
              cur.close()
              conn.close()
        `;

        const pyodide = window.pyodide;
        pyodide.runPython(h);
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
