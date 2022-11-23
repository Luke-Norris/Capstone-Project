import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ControlledSwitches = () => {
  const [frontDoor, setFrontDoor] = React.useState(true);
  const [backDoor, setBackDoor] = React.useState(true);
  const [garageDoor, setGarageDoor] = React.useState(true);

  const frontDoorSwitch = (
    <Switch
      checked={frontDoor}
      onChange={(event) => {
        setFrontDoor(event.target.checked);
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
      <FormControlLabel control={frontDoorSwitch} label="Front Door" />
      <FormControlLabel control={backDoorSwitch} label="Back Door" />
      <FormControlLabel control={garageDoorSwitch} label="Garage Door" />
    </FormGroup>
  );
};

export default ControlledSwitches;
