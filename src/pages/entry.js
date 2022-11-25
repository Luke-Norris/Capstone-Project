import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import ThreeDFloorPlan from '../components/ThreeDFloorPlan';
import FloorPlan from './floorplan';
import { Model } from '../components/ThreeDFloorPlan';
import { AmbientLight } from 'three';

const Entry = () => {
  return (
    <div>
      <button>
        <NavLink to="/metrics" activeStyle>
            Metrics
        </NavLink>
      </button>
      <Button variant="contained">Test</Button>
      <h1>This will not be on the navbar permanently</h1>
      <text>This will be the entrace to the website where the user clicks "continue" or something of the sort</text>
    </div>
      // <div>
      //   <Canvas>
      //     <AmbientLight intensity={1.25}/>
      //     <OrbitControls />
      //     <Suspense fallback={3}>
      //       <Model />
      //     </Suspense>
      //   </Canvas>
      // </div>
      
  );
};
  
export default Entry;

