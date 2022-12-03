import * as React from "react";
import { useState } from "react";
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
  const [bathroom1Light1, setBathroom1Light1] = React.useState(true);
  const [bathroom1Light2, setBathroom1Light2] = React.useState(true);
  const [garageLight, setGarageLight] = React.useState(true);

    // bathrooms2
    const [bathroom2Light1, setBathroom2Light1] = React.useState(true);
    const [bathroom2Light2, setBathroom2Light2] = React.useState(true);


  // livingRoom, kitchen & laundryRoom
  const [livingRoomLight, setLivingRoomLight] = React.useState(true);
  const [kitchenLight, setKitchenLight] = React.useState(true);
  const [bedroomTv, setBedroomTv] = React.useState(true);
  const [livingroomTv, setLivingroomTv] = React.useState(true);

  const [data3, setData3] = useState({data: []});
  const [isLoading3, setIsLoading3] = useState(false);
  const [err3, setErr3] = useState('');

  const bed1Off = async () => {
    setIsLoading3(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bedroom-Light-Off', {
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
      setData3(result);
    } catch (err) {
      setErr3(err.message);
    } finally {
      setIsLoading3(false);
    }
  };

  const [data4, setData4] = useState({data: []});
  const [isLoading4, setIsLoading4] = useState(false);
  const [err4, setErr4] = useState('');

  const bed1On = async () => {
    setIsLoading4(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bedroom-Light-On', {
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
      setData4(result);
    } catch (err) {
      setErr4(err.message);
    } finally {
      setIsLoading4(false);
    }
  };


  const [data5, setData5] = useState({data: []});
  const [isLoading5, setIsLoading5] = useState(false);
  const [err5, setErr5] = useState('');

  const bed2On = async () => {
    setIsLoading5(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bedroom-Light-On2', {
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
      setData5(result);
    } catch (err) {
      setErr5(err.message);
    } finally {
      setIsLoading5(false);
    }
  };


  const [data6, setData6] = useState({data: []});
  const [isLoading6, setIsLoading6] = useState(false);
  const [err6, setErr6] = useState('');

  const bed2Off = async () => {
    setIsLoading6(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bedroom-Light-Off2', {
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
      setData6(result);
    } catch (err) {
      setErr6(err.message);
    } finally {
      setIsLoading6(false);
    }
  };

  const [data7, setData7] = useState({data: []});
  const [isLoading7, setIsLoading7] = useState(false);
  const [err7, setErr7] = useState('');

  const bed3Off = async () => {
    setIsLoading7(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bedroom-Light-Off3', {
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
      setData7(result);
    } catch (err) {
      setErr7(err.message);
    } finally {
      setIsLoading7(false);
    }
  };

  const [data8, setData8] = useState({data: []});
  const [isLoading8, setIsLoading8] = useState(false);
  const [err8, setErr8] = useState('');

  const bed3On = async () => {
    setIsLoading8(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bedroom-Light-On3', {
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
      setData8(result);
    } catch (err) {
      setErr8(err.message);
    } finally {
      setIsLoading8(false);
    }
  };

  const [data9, setData9] = useState({data: []});
  const [isLoading9, setIsLoading9] = useState(false);
  const [err9, setErr9] = useState('');

  const bath1On1 = async () => {
    setIsLoading9(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom1-Light-one-On', {
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
      setData9(result);
    } catch (err) {
      setErr9(err.message);
    } finally {
      setIsLoading9(false);
    }
  };

  const [data10, setData10] = useState({data: []});
  const [isLoading10, setIsLoading10] = useState(false);
  const [err10, setErr10] = useState('');

  const bath1Off1 = async () => {
    setIsLoading10(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom1-Light-one-Off', {
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
      setData10(result);
    } catch (err) {
      setErr10(err.message);
    } finally {
      setIsLoading10(false);
    }
  };

  const [data11, setData11] = useState({data: []});
  const [isLoading11, setIsLoading11] = useState(false);
  const [err11, setErr11] = useState('');

  const bath1On2 = async () => {
    setIsLoading11(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom1-Light-two-On', {
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
      setData11(result);
    } catch (err) {
      setErr11(err.message);
    } finally {
      setIsLoading11(false);
    }
  };

  const [data12, setData12] = useState({data: []});
  const [isLoading12, setIsLoading12] = useState(false);
  const [err12, setErr12] = useState('');

  const bath1Off2 = async () => {
    setIsLoading12(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom1-Light-two-Off', {
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
      setData12(result);
    } catch (err) {
      setErr12(err.message);
    } finally {
      setIsLoading12(false);
    }
  };
  /////////////////2ndbath
  const [data13, setData13] = useState({data: []});
  const [isLoading13, setIsLoading13] = useState(false);
  const [err13, setErr13] = useState('');

  const bath2Off1 = async () => {
    setIsLoading13(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom2-Light-one-Off', {
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
      setData13(result);
    } catch (err) {
      setErr13(err.message);
    } finally {
      setIsLoading13(false);
    }
  };

  const [data14, setData14] = useState({data: []});
  const [isLoading14, setIsLoading14] = useState(false);
  const [err14, setErr14] = useState('');

  const bath2On1 = async () => {
    setIsLoading14(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom2-Light-one-On', {
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
      setData14(result);
    } catch (err) {
      setErr14(err.message);
    } finally {
      setIsLoading14(false);
    }
  };

  const [data15, setData15] = useState({data: []});
  const [isLoading15, setIsLoading15] = useState(false);
  const [err15, setErr15] = useState('');

  const bath2Off2 = async () => {
    setIsLoading15(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom2-Light-two-Off', {
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
      setData15(result);
    } catch (err) {
      setErr15(err.message);
    } finally {
      setIsLoading15(false);
    }
  };

  const [data16, setData16] = useState({data: []});
  const [isLoading16, setIsLoading16] = useState(false);
  const [err16, setErr16] = useState('');

  const bath2On2 = async () => {
    setIsLoading16(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/bathroom2-Light-two-On', {
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
      setData16(result);
    } catch (err) {
      setErr16(err.message);
    } finally {
      setIsLoading16(false);
    }
  };

  const [data17, setData17] = useState({data: []});
  const [isLoading17, setIsLoading17] = useState(false);
  const [err17, setErr17] = useState('');

  const kitchenOn = async () => {
    setIsLoading17(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/kitchen-on', {
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
      setData17(result);
    } catch (err) {
      setErr17(err.message);
    } finally {
      setIsLoading17(false);
    }
  };

  const [data18, setData18] = useState({data: []});
  const [isLoading18, setIsLoading18] = useState(false);
  const [err18, setErr18] = useState('');

  const kitchenOff = async () => {
    setIsLoading18(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/kitchen-off', {
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
      setData18(result);
    } catch (err) {
      setErr18(err.message);
    } finally {
      setIsLoading18(false);
    }
  };

  const [data19, setData19] = useState({data: []});
  const [isLoading19, setIsLoading19] = useState(false);
  const [err19, setErr19] = useState('');

  const lrOff = async () => {
    setIsLoading19(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/livingroom-off', {
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
      setData19(result);
    } catch (err) {
      setErr19(err.message);
    } finally {
      setIsLoading19(false);
    }
  };

  const [data20, setData20] = useState({data: []});
  const [isLoading20, setIsLoading20] = useState(false);
  const [err20, setErr20] = useState('');

  const lrOn = async () => {
    setIsLoading20(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/livingroom-on', {
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
      setData20(result);
    } catch (err) {
      setErr20(err.message);
    } finally {
      setIsLoading20(false);
    }
  };
  const [data21, setData21] = useState({data: []});
  const [isLoading21, setIsLoading21] = useState(false);
  const [err21, setErr21] = useState('');

  const br_tv_on = async () => {
    setIsLoading21(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/br-tv-on', {
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
      setData21(result);
    } catch (err) {
      setErr21(err.message);
    } finally {
      setIsLoading21(false);
    }
  };

  const [data22, setData22] = useState({data: []});
  const [isLoading22, setIsLoading22] = useState(false);
  const [err22, setErr22] = useState('');

  const br_tv_off = async () => {
    setIsLoading22(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/br-tv-off', {
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
      setData22(result);
    } catch (err) {
      setErr22(err.message);
    } finally {
      setIsLoading22(false);
    }
  };

  const [data23, setData23] = useState({data: []});
  const [isLoading23, setIsLoading23] = useState(false);
  const [err23, setErr23] = useState('');

  const lr_tv_off = async () => {
    setIsLoading23(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/lr-tv-off', {
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
      setData23(result);
    } catch (err) {
      setErr23(err.message);
    } finally {
      setIsLoading23(false);
    }
  };

  const [data24, setData24] = useState({data: []});
  const [isLoading24, setIsLoading24] = useState(false);
  const [err24, setErr24] = useState('');

  const lr_tv_on = async () => {
    setIsLoading24(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/lr-tv-on', {
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
      setData24(result);
    } catch (err) {
      setErr24(err.message);
    } finally {
      setIsLoading24(false);
    }
  };

  




  // Bedrooms
  ////////////////////////////////////////////////
  const bedroom1LightSwitch = (
    <Switch
      checked={bedroom1Light}
      onChange={(event) => {
        setBedroom1Light(event.target.checked);
        if (bedroom1Light) {
          console.log('off')
          bed1Off()
          setBedroom1Light(event.target.checked);
        } else {
          bed1On()
          console.log('on')
          setBedroom1Light(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bedroom2LightSwitch = (
    <Switch
      checked={bedroom2Light}
      onChange={(event) => {
        console.log(bedroom2Light)
        setBedroom2Light(event.target.checked);
        if (bedroom2Light) {
          console.log('off')
          bed2Off()
          setBedroom2Light(event.target.checked);
        } else {
          bed2On()
          console.log('on')
          setBedroom2Light(event.target.checked);
        }

      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bedroom3LightSwitch = (
    <Switch
      checked={bedroom3Light}
      onChange={(event) => {
        setBedroom3Light(event.target.checked);
        if (bedroom3Light) {
          console.log('off')
          bed3Off()
          setBedroom3Light(event.target.checked);
        } else {
          bed3On()
          console.log('on')
          setBedroom3Light(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
  ///////////////////////////////////////////////////
  // Bathrooms
  const bathroom1LightSwitch1 = (
    <Switch
      checked={bathroom1Light1}
      onChange={(event) => {
        setBathroom1Light1(event.target.checked);
        if (bathroom1Light1) {
          console.log('off')
          bath1Off1()
          setBathroom1Light1(event.target.checked);
        } else {
          bath1On1()
          console.log('on')
          setBathroom1Light1(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bathroom1LightSwitch2 = (
    <Switch
      checked={bathroom1Light2}
      onChange={(event) => {
        setBathroom1Light2(event.target.checked);
        if (bathroom1Light2) {
          console.log('off')
          bath1Off2()
          setBathroom1Light2(event.target.checked);
        } else {
          bath1On2()
          console.log('on')
          setBathroom1Light2(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bathroom2LightSwitch1 = (
    <Switch
      checked={bathroom2Light1}
      onChange={(event) => {
        setBathroom2Light1(event.target.checked);
        if (bathroom2Light1) {
          console.log('off')
          bath2Off1()
          setBathroom2Light1(event.target.checked);
        } else {
          bath2On1()
          console.log('on')
          setBathroom2Light1(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const bathroom2LightSwitch2 = (
    <Switch
      checked={bathroom2Light2}
      onChange={(event) => {
        setBathroom2Light2(event.target.checked);
        if (bathroom2Light2) {
          console.log('off')
          bath2Off2()
          setBathroom2Light2(event.target.checked);
        } else {
          bath2On2()
          console.log('on')
          setBathroom2Light2(event.target.checked);
        }
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
        if (kitchenLight) {
          console.log('off')
          kitchenOff()
          setKitchenLight(event.target.checked);
        } else {
          kitchenOn()
          console.log('on')
          setKitchenLight(event.target.checked);
        }
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
        if (livingRoomLight) {
          console.log('off')
          lrOff()
          setLivingRoomLight(event.target.checked);
        } else {
          lrOn()
          console.log('on')
          setLivingRoomLight(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  ///////////////////////////////////////////////////
  // 

  const brTvSwitch = (
    <Switch
      checked={bedroomTv}
      onChange={(event) => {
        setBedroomTv(event.target.checked);
        if (bedroomTv) {
          console.log('off')
          br_tv_off()
          setBedroomTv(event.target.checked);
        } else {
          br_tv_on()
          console.log('on')
          setBedroomTv(event.target.checked);
        }
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );

  const lrTvSwitch = (
    <Switch
      checked={livingroomTv}
      onChange={(event) => {
        setLivingroomTv(event.target.checked);
        if (livingroomTv) {
          console.log('off')
          lr_tv_off()
          setLivingroomTv(event.target.checked);
        } else {
          lr_tv_on()
          console.log('on')
          setLivingroomTv(event.target.checked);
        }
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

    <Grid container spacing={10}>
        <Grid item xs={4}>
            <FormGroup>
                <FormControlLabel control={bedroom1LightSwitch} label="Bedroom 1" style={{color: 'white'}} />
                <FormControlLabel control={bedroom2LightSwitch} label="Bedroom 2" style={{color: 'white'}} />
                <FormControlLabel control={bedroom3LightSwitch} label="Bedroom 3" style={{color: 'white'}}/>
                <FormControlLabel control={brTvSwitch} label="Bedroom TV" style={{color: 'white'}} />
                <FormControlLabel control={lrTvSwitch} label="Livingroom TV" style={{color: 'white'}} />
                <FormControlLabel control={kitchenLightSwitch} label="Kitchen Light" style={{color: 'white'}}/>
                <FormControlLabel control={livingRoomLightSwitch} label="LivingRoom Light" style={{color: 'white'}}/>
                </FormGroup>
        </Grid>
        <Grid item xs={4} style={{marginLeft:'-80px'}}>
            <FormGroup>
                <FormControlLabel control={bathroom1LightSwitch1} label="Bathroom 1 Light 1" style={{color: 'white'}} />
                <FormControlLabel control={bathroom1LightSwitch2} label="Bathroom 1 Light 2" style={{color: 'white'}} />
                <FormControlLabel control={bathroom2LightSwitch1} label="Bathroom 2 Light 1" style={{color: 'white'}} />
                <FormControlLabel control={bathroom2LightSwitch2} label="Bathroom 2 Light 2" style={{color: 'white'}} />
            </FormGroup>
        </Grid>
    </Grid>
  );
};

export default ControlledLightSwitches;