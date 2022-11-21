
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // website breaks without this import. PLZ DONT MOVE
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import FloorPlan from './pages/floorplan';
import Metrics from './pages/metrics';
import Entry from './pages/entry';
  
function App() {
return (
    // How many, And which pages should this website contain?
    // Probably about 4. Landing page with floor layout, metrics screen, sensors page, about the creators?
    // If 5 pages, the additional page will be a homescreen in which you have to click a centered "enter" button
    // 1. Entry
    // 2. Landing / floorplan
    // 3. metrics
    // 4. sensors (may potentially be integrated with floor plan)
    // 5. About us

    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/metrics' element={<Metrics/>} />
        <Route path='/floorplan' element={<FloorPlan/>} />
        <Route path='/entry' element={<Entry/>} />
    </Routes>
    </Router>
);
}
// <Route exact path='/' exact element={<Home />} />
  
export default App;