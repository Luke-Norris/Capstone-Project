import React from 'react';
import Navbar from '../components/Navbar';
import NewNavbar from "../components/NewNavbar";
import { NavLink } from 'react-router-dom';
import { Button, Grid, Box } from "@mui/material";
const Home = () => {
  return (
    <div>
      Welcome to Sm4rtHome
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }} >
        <Button variant='contained'>
          <NavLink to="/floorplan" style={{color: "white", textDecoration: 'none'}}>
            Enter
          </NavLink>
        </Button>
      </div>
    </div>
  );
};
  
export default Home;