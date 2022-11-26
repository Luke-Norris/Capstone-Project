import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, Card } from "@mui/material";
const ControlledLightSwitches = () => {
  // bedrooms
  const [bedroom1Light, setBedroom1Light] = React.useState(true);
  const [bedroom2Light, setBedroom2Light] = React.useState(true);
  const [bedroom3Light, setBedroom3Light] = React.useState(true);

  // bathrooms & garage
  const [bathroom1Light, setBathroom1Light] = React.useState(true);
  const [bathroom2Light, setBathroom2Light] = React.useState(true);
  const [garageLight, setGarageLight] = React.useState(true);


  // livingRoom, kitchen & laundryRoom
  const [livingRoomLight, setLivingRoomLight] = React.useState(true);
  const [kitchenLight, setKitchenLight] = React.useState(true);
  const [laundryRoomLight, setLaundryRoomLight] = React.useState(true);


  
  // Bedrooms
  ////////////////////////////////////////////////
  const bedroom1LightSwitch = (
    <Switch
      checked={bedroom1Light}
      onChange={(event) => {
        setBedroom1Light(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bedroom2LightSwitch = (
    <Switch
      checked={bedroom2Light}
      onChange={(event) => {
        setBedroom2Light(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bedroom3LightSwitch = (
    <Switch
      checked={bedroom3Light}
      onChange={(event) => {
        setBedroom3Light(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
  ///////////////////////////////////////////////////
  // Bathrooms
  const bathroom1LightSwitch = (
    <Switch
      checked={bathroom1Light}
      onChange={(event) => {
        setBathroom1Light(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bathroom2LightSwitch = (
    <Switch
      checked={bathroom2Light}
      onChange={(event) => {
        setBathroom2Light(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
  ///////////////////////////////////////////////////
  // Garage

  const garageLightSwitch = (
    <Switch
      checked={garageLight}
      onChange={(event) => {
        setGarageLight(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  ///////////////////////////////////////////////////
  // Kitchen

  const kitchenLightSwitch = (
    <Switch
      checked={kitchenLight}
      onChange={(event) => {
        setKitchenLight(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  ///////////////////////////////////////////////////
  // LivingRoom

  const livingRoomLightSwitch = (
    <Switch
      checked={livingRoomLight}
      onChange={(event) => {
        setLivingRoomLight(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  ///////////////////////////////////////////////////
  // 

  const laundryRoomLightSwitch = (
    <Switch
      checked={laundryRoomLight}
      onChange={(event) => {
        setLaundryRoomLight(event.target.checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  return (
    // <FormGroup>
    //   <FormControlLabel control={bedroom1LightSwitch} label="Bedroom 1 Light" style={{color: 'white'}} />
    //   <FormControlLabel control={bedroom2LightSwitch} label="Bedroom 2 Light" style={{color: 'white'}} />
    //   <FormControlLabel control={bedroom3LightSwitch} label="Bedroom 3 Light" style={{color: 'white'}}/>
    //   <FormControlLabel control={bathroom1LightSwitch} label="Bathroom 1 Light" style={{color: 'white'}} />
    //   <FormControlLabel control={bathroom2LightSwitch} label="Bathroom 2 Light" style={{color: 'white'}} />
    //   <FormControlLabel control={kitchenLightSwitch} label="Kitchen Light" style={{color: 'white'}}/>
    //   <FormControlLabel control={garageLightSwitch} label="Garage Light" style={{color: 'white'}} />
    //   <FormControlLabel control={laundryRoomLightSwitch} label="LaundryRoom Light" style={{color: 'white'}} />
    //   <FormControlLabel control={livingRoomLightSwitch} label="LivingRoom Light" style={{color: 'white'}}/>
    // </FormGroup>

    <Grid container spacing={-50}>
        <Grid item xs={4}>
            <FormGroup>
                <FormControlLabel control={bedroom1LightSwitch} label="Bedroom 1 Light" style={{color: 'white'}} />
                <FormControlLabel control={bedroom2LightSwitch} label="Bedroom 2 Light" style={{color: 'white'}} />
                <FormControlLabel control={bedroom3LightSwitch} label="Bedroom 3 Light" style={{color: 'white'}}/>
                <FormControlLabel control={bathroom1LightSwitch} label="Bathroom 1 Light" style={{color: 'white'}} />
                <FormControlLabel control={bathroom2LightSwitch} label="Bathroom 2 Light" style={{color: 'white'}} />
            </FormGroup>
        </Grid>
        <Grid item xs={5}>
            <FormGroup>
                <FormControlLabel control={kitchenLightSwitch} label="Kitchen Light" style={{color: 'white'}}/>
                <FormControlLabel control={garageLightSwitch} label="Garage Light" style={{color: 'white'}} />
                <FormControlLabel control={laundryRoomLightSwitch} label="LaundryRoom Light" style={{color: 'white'}} />
                <FormControlLabel control={livingRoomLightSwitch} label="LivingRoom Light" style={{color: 'white'}}/>
            </FormGroup>
        </Grid>
    </Grid>
  );
};

export default ControlledLightSwitches;