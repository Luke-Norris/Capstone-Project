import * as React from "react";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ControlledSwitches = () => {
  const [frontDoor, setFrontDoor] = React.useState(true);
  const [backDoor, setBackDoor] = React.useState(true);
  const [garageDoor, setGarageDoor] = React.useState(true);

  const [data25, setData25] = useState({data: []});
  const [isLoading25, setIsLoading25] = useState(false);
  const [err25, setErr25] = useState('');

  const front_open = async () => {
    setIsLoading25(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/front-open', {
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
      setData25(result);
    } catch (err) {
      setErr25(err.message);
    } finally {
      setIsLoading25(false);
    }
  };

  const [data26, setData26] = useState({data: []});
  const [isLoading26, setIsLoading26] = useState(false);
  const [err26, setErr26] = useState('');

  const front_close = async () => {
    setIsLoading26(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/front-close', {
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
      setData26(result);
    } catch (err) {
      setErr26(err.message);
    } finally {
      setIsLoading26(false);
    }
  };

  const [data27, setData27] = useState({data: []});
  const [isLoading27, setIsLoading27] = useState(false);
  const [err27, setErr27] = useState('');

  const back_close = async () => {
    setIsLoading27(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/back-close', {
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
      setData27(result);
    } catch (err) {
      setErr27(err.message);
    } finally {
      setIsLoading27(false);
    }
  };

  const [data28, setData28] = useState({data: []});
  const [isLoading28, setIsLoading28] = useState(false);
  const [err28, setErr28] = useState('');

  const back_open = async () => {
    setIsLoading28(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/back-open', {
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
      setData28(result);
    } catch (err) {
      setErr28(err.message);
    } finally {
      setIsLoading28(false);
    }
  };
  // garage
  const [data29, setData29] = useState({data: []});
  const [isLoading29, setIsLoading29] = useState(false);
  const [err29, setErr29] = useState('');

  const garage_open = async () => {
    setIsLoading29(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/garage-open', {
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
      setData29(result);
    } catch (err) {
      setErr29(err.message);
    } finally {
      setIsLoading29(false);
    }
  };

  const [data30, setData30] = useState({data: []});
  const [isLoading30, setIsLoading30] = useState(false);
  const [err30, setErr30] = useState('');

  const garage_close = async () => {
    setIsLoading30(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/garage-close', {
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
      setData30(result);
    } catch (err) {
      setErr30(err.message);
    } finally {
      setIsLoading30(false);
    }
  };

  const frontDoorSwitch = (
    <Switch
      checked={frontDoor}
      onChange={(event) => {
        setFrontDoor(event.target.checked);
        if (frontDoor) {
          console.log('off')
          front_close()
          setFrontDoor(event.target.checked);
        } else {
          front_open()
          console.log('on')
          setFrontDoor(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const backDoorSwitch = (
    <Switch
      checked={backDoor}
      onChange={(event) => {
        setBackDoor(event.target.checked);
        if (backDoor) {
          console.log('off')
          back_close()
          setBackDoor(event.target.checked);
        } else {
          back_open()
          console.log('on')
          setBackDoor(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const garageDoorSwitch = (
    <Switch
      checked={garageDoor}
      onChange={(event) => {
        setGarageDoor(event.target.checked);
        if (garageDoor) {
          console.log('off')
          garage_close()
          setGarageDoor(event.target.checked);
        } else {
          garage_open()
          console.log('on')
          setGarageDoor(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  return (
    <FormGroup>
      <FormControlLabel control={frontDoorSwitch} label="Front Door" style={{color: 'white'}} />
      <FormControlLabel control={backDoorSwitch} label="Back Door" style={{color: 'white'}} />
      <FormControlLabel control={garageDoorSwitch} label="Garage Door" style={{color: 'white'}}/>
    </FormGroup>
  );
};

export default ControlledSwitches;
