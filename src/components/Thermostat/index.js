import { React, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Thermo from "react-nest-thermostat";

const Thermostat = () => {
  const [temp, setTemp] = useState(68);

  const increase = () => {
    if (temp == 80) {
      console.log("You cannot increase the temperature any higher!")
    } else {
      setTemp((count) => count + 1);
    }
  };

  const decrease = () => {
    if (temp == 55) {
      console.log("You cannot decrease the temperature any lower!")
    } else {
      setTemp((count) => count - 1);
    }
  };

  return (
    <Box mt={10}>
      <Box ml={18} mt={5}>
        <Thermo
          height="150px"
          width="150px"
          ambientTemperature={temp}
          targetTemperature={temp}
          hvacMode={temp == 0 ? "off" : temp >= 75 ? "heating" : "cooling"}
        />
      </Box>
      <Box ml={17} mt={0}>
        <Grid container spacing={6}>
          <Grid item>
            <Fab color="primary" aria-label="add" onClick={decrease}>
              <RemoveIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="primary" aria-label="add" onClick={increase}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Thermostat;
